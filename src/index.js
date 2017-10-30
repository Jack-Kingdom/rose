const Koa = require("koa");
const session = require("koa-session");
const config = require("../config");
const apiRouter = require("./api/index");

const app = new Koa();
app.keys = [config.session_secret];
app.use(session({maxAge: config.sessionTimeout}, app));

app.use(apiRouter.routes());

console.log(`App started at port ${config.port}.`);
app.listen(config.port);