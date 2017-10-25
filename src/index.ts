import * as Koa from 'koa'
import Config from '../config'
import apiRouter from './api/index'

const app = new Koa();

app.use(apiRouter.routes());

// todo rewrite here by logger
console.log(`App started at port ${Config.port}.`);
app.listen(Config.port);
