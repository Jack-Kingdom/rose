import * as Router from "koa-router"
import articleRouter from './article'

const v1Router = new Router();

v1Router.use(articleRouter.routes());

export default v1Router;