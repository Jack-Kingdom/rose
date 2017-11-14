const Router = require("koa-router");
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
    .param("slug", async (slug, ctx, next) => {
        this.article = await models.Article.findOne({slug}).populate('tags');
        if (!this.article) return ctx.body = format(404);
        else next();
    })
    .delete("/articles/:slug", async (ctx, next) => {
        if (!ctx.session.signed) return ctx.body = format(401);
        await this.article.remove();
        return ctx.body = format(200);
    })
    .put("/articles/:slug", async (ctx, next) => {
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
    .get("/articles/:slug", async (ctx, next) => {
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

module.exports = articleRouter;
