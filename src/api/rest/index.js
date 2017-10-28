const Router = require("koa-router");
const v1Router = require("./v1/index");

const restRouter = new Router();

restRouter.use("/v1", v1Router.routes());

module.exports = restRouter;