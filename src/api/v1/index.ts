import * as Router from "koa-router"

const v1Router = new Router();

v1Router.get('/', async (ctx, next) => {
    ctx.res.statusCode = 200;
    ctx.res.write("hello world")
});

export default v1Router;