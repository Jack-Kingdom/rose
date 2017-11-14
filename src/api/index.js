const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const json = require("koa-json");

const apiRouter = new Router();
apiRouter.use(bodyParser());
apiRouter.use(json({pretty: false}));

apiRouter.use(async (ctx, next) => {
    const start_timestamp = Date.now();
    await next();
    console.log(`${ctx.req.url} ${ctx.req.method} ${ctx.res.statusCode} ${Date.now() - start_timestamp}`)
});

apiRouter.use("/api/rest", require("./rest").routes());
apiRouter.use("/api/auth", require("./auth").routes());
apiRouter.use("/api/media", require("./media").routes());

module.exports = apiRouter;