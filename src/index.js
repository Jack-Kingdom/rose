const Koa = require("koa");
const config = require("../config");
const apiRouter = require("./api/index");

const app = new Koa();

app.use(apiRouter.routes());

console.log(`App started at port ${config.port}.`);
app.listen(config.port);