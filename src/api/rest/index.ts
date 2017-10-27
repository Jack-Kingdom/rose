import * as Router from "koa-router";
import * as bodyParser from "koa-bodyparser";
import * as json from "koa-json";
import v1Router from "./v1/index";

const apiRouter = new Router();
apiRouter.use(bodyParser());
apiRouter.use(json({pretty: false}));

apiRouter.use("*", async (ctx, next) => {
    const start_timestamp = Date.now();
    await next();
    console.log(`url: ${ctx.req.url}, time:${Date.now() - start_timestamp}`)
});

apiRouter.use("/api/v1", v1Router.routes());


export default apiRouter;