const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const json = require("koa-json");
const restRouter = require("./rest");
const authRouter = require("./auth");

const apiRouter = new Router();
apiRouter.use(bodyParser());
apiRouter.use(json({pretty: false}));

apiRouter.use("*", async (ctx, next) => {
    const start_timestamp = Date.now();
    await next();
    console.log(`url: ${ctx.req.url}, time:${Date.now() - start_timestamp}`)
});

apiRouter.use("/api/rest", restRouter.routes());
apiRouter.use("/api/auth", authRouter.routes());

module.exports = apiRouter;