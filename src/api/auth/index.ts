import * as Router from "koa-router";
import AuthV1Router from "./v1/index";

const restRouter = new Router();

restRouter.use("/v1", AuthV1Router.routes());

export default restRouter;