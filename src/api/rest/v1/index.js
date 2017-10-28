const Router = require("koa-router");
const articleRouter = require("./article");

const v1Router = new Router();

v1Router.use(articleRouter.routes());

module.exports = v1Router;
