import * as Router from "koa-router"
import models from '../../persistence/models'

const articleRouter = new Router();

enum articleStatus {
    'published', 'draft', 'removed'
}

interface articleArgsInterface {
    title: string
    content: string
    renderedContent: string
    status: articleStatus
    allowComments: boolean
}

articleRouter.post("/articles", (ctx, next) => {

});

articleRouter.delete("/articles/:uuid", async (ctx, next) => {

});

articleRouter.put("/articles/:uuid", async (ctx, next) => {

});

articleRouter.get("/articles/:uuid", async (ctx, next) => {
    const article = await models.Article.findOne({uuid: ctx.params.uuid});
    if (!article) return ctx.body = {success: false, msg: "not found"};
    else {
        // todo check login or not
    }
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

export default articleRouter;
