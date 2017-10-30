const Router = require("koa-router");
const {ObjectId} = require('mongodb');
const models = require("../../persistence/models/index");
const format = require("../../utils/format");

const articleRouter = new Router();

articleRouter.post("/articles", async (ctx, next) => {
    if (!ctx.session.signed) return ctx.body = format(401);
    const articleFields = Object.keys(models.Article.schema.obj);
    if (!(Object.keys(ctx.request.body).every(arg => articleFields.includes(arg)))) {
        return ctx.body = format(400);
    } else {
        try {
            const article = new models.Article(ctx.request.body);
            await article.save();
            return ctx.body = format(200);
        } catch (err) {
            return ctx.body = format(500, ctx.request.body, err.msg);
        }
    }
});

articleRouter
    .param("id", async (id, ctx, next) => {
        this.article = await models.Article.findOne({_id: ObjectId.isValid(id) ? id : null}).populate('tags');
        if (!this.article) return ctx.body = format(404);
        else next();
    })
    .delete("/articles/:id", async (ctx, next) => {
        if (!ctx.session.signed) return ctx.body = format(401);
        await this.article.remove();
        return ctx.body = format(200);
    })
    .put("/articles/:id", async (ctx, next) => {
        if (!ctx.session.signed) return ctx.body = format(401);
        const articleFields = Object.keys(models.Article.schema.obj);
        if (!(Object.keys(ctx.request.body).every(arg => articleFields.includes(arg)))) {
            return ctx.body = format(400);
        } else {
            try {
                Object.assign(this.article, ctx.request.body);
                await this.article.save();
                return ctx.body = format(200);
            } catch (err) {
                return ctx.body = format(500, ctx.request.body, err.msg);
            }
        }
    })
    .get("/articles/:id", async (ctx, next) => {
        if (this.article.status === "published" || ctx.session.signed)
            return ctx.body = format(200, this.article.toJSON());
        else
            return ctx.body = format(404);
    });

articleRouter.get("/articles", async (ctx, next) => {

    const order = ctx.request.body["order"] || "-updatedAt";
    const offset = ctx.request.body["offset"] || 0;
    const limit = ctx.request.body["limit"] || 20;

    let articles = null;
    if (ctx.session.signed) {
        articles = await models.Article.find().sort(order).skip(offset).limit(limit);
    } else {
        articles = await models.Article.find({status: "published"}).sort(order).skip(offset).limit(limit);
    }

    return ctx.body = format(200, articles);
});

// async function remove(uuid: string) {
//
//     const obj = await models.Article.findOne({uuid: uuid});
//     if (!obj) return false;
//     await obj.remove();
//     return true;
// }
//
// async function update(uuid: string, args: articleArgsInterface) {
//
//     const obj = await models.Article.findOne({uuid: uuid});
//     if (!obj) return false;
//
//     // todo pass
//
//     await obj.save();
//     return true;
// }
//
// async function retrieve(uuid: string) {
//
// }
//
// async function multipleRetrieve(order: string, offset: number, limit: number, conditions = {}) {
//
//     const articles = await models.Article.find(conditions).sort(order).skip(offset).limit(limit);
//     return articles.map((article) => article.toObject())
// }

module.exports = articleRouter;
