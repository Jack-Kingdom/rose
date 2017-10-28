const Router = require("koa-router");
const articleRouter = require("./article");

const restRouter = new Router();

restRouter.use(articleRouter.routes());

module.exports = restRouter;