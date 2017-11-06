const fs = require("fs");
const Router = require("koa-router");
const format = require("../utils/format");

const mediaRouter = Router();

mediaRouter.post("/upload", async (ctx, next) => {
    // if (!ctx.session.signed) return format(401);

    const file = ctx.request.body.files.file;
    const reader = fs.createReadStream(file.path);
    const stream = fs.createWriteStream('test');
    await reader.pipe(stream);

    return ctx.body = format(200);
});

mediaRouter.delete("/:id", async (ctx, next) => {

});

mediaRouter.put("/:id", async (ctx, next) => {

});

mediaRouter.get("/:id", async (req, res) => {

});

module.exports = mediaRouter;