import * as Router from "koa-router"
import v1Router from './v1/index'

const apiRouter = new Router();

// todo: rewrite this as a middleware function
apiRouter.use('/', async (ctx, next) => {
    const start_timestamp = Date.now();
    await next();
    console.log(`url: ${ctx.req.url}, time:${Date.now() - start_timestamp}`)
});

apiRouter.use('/v1', v1Router.routes());


export default apiRouter;