import * as Koa from 'koa'
import Config from '../config'

const app = new Koa();

app.use(ctx=>{
    ctx.body="hello koa"
});

app.listen(Config.port);