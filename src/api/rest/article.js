const Router = require("koa-router");
const {ObjectId} = require('mongodb');
const models = require("../../persistence/models/index");

const articleRouter = new Router();

articleRouter.post("/articles", (ctx, next) => {
    if (!ctx.session.signed) return ctx.body = {success: false, msg: "please logging first"};


});

articleRouter
    .param("id", async (id, ctx, next) => {
        this.article = await models.Article.findOne({_id: ObjectId.isValid(id) ? id : null}).populate('tags');
        if (!this.article) return ctx.body = {success: false, msg: "not found"};
        else next();
    })
    .delete("/articles/:id", async (ctx, next) => {
        if (!ctx.session.signed) return ctx.body = {success: false, msg: "please logging first"};

    })
    .put("/articles/:id", async (ctx, next) => {
        if (!ctx.session.signed) return ctx.body = {success: false, msg: "please logging first"};
    })
    .get("/articles/:id", async (ctx, next) => {
        if (this.article && (this.article.status === "published" || ctx.session.signed))
            return ctx.body = this.article.toJSON();
        else
            return ctx.body = {success: false, msg: "not found"};
    });

articleRouter.get("/articles", async (ctx, next) => {
    // ctx.res.statusCode = 200;
    ctx.body = "hello world";
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
