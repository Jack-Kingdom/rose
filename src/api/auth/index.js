const Router = require("koa-router");
const authV1Router = require("./v1/index");

const restRouter = new Router();

restRouter.use("/v1", authV1Router.routes());

module.exports = restRouter;