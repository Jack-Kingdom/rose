const crypto = require("crypto");
const Router = require("koa-router");
const isEmail = require('validator/lib/isEmail');
const config = require("../../config/index");
const models = require("../persistence/models/index");
const format = require("../utils/format");

const _sha256 = (msg) => {
    const hash = crypto.createHash('sha256');
    hash.update(msg);
    return hash.digest('hex')
};

const _hashPass = (email, password) => _sha256(_sha256(email) + _sha256(password));

const authRouter = new Router();

authRouter.post("/register", async (ctx, next) => {
    if (!config.openRegister) return ctx.body = format(403);

    const email = ctx.request.body.email;
    if (!isEmail(email)) return ctx.body = format(400, {}, "email illegal");
    const password = ctx.request.body.password;
    if (password.length < 8) return ctx.body = format(400, {}, "password too short");

    const account = await models.Account.findOne({email});
    if (account) return ctx.body = format(400, {}, "email has registered");

    const newAccount = new models.Account({email: email, password: _hashPass(email, password)});
    await newAccount.save();
    ctx.session.signed = true;
    return ctx.body = format(200);
});

authRouter.post("/login", async (ctx, next) => {

    const email = ctx.request.body.email;
    const password = ctx.request.body.password;

    const account = await models.Account.findOne({email});
    if (!account || !(account.password === _hashPass(email, password)))
        return ctx.body = format(400, {}, "email or password not match");

    account.lastLogin = Date.now();
    await account.save();

    ctx.session.signed = true;
    return ctx.body = format(200);
});

authRouter.post("/logout", async (ctx, next) => {
    if (ctx.session.signed) {
        ctx.session.signed = false;
        return ctx.body = format(200);
    } else {
        return ctx.body = format(401)
    }
});

authRouter.post("/changePassword", async (ctx, next) => {
    const email = ctx.request.body.email;
    const oldPassword = ctx.request.body.oldPassword;
    const newPassword = ctx.request.body.newPassword;
    if (newPassword.length < 8) return ctx.body = format(400, {}, "password too short");

    const account = await models.Account.findOne({email});
    if (account && account.password === _hashPass(email, oldPassword)) {
        account.password = _hashPass(email, newPassword);
        await account.save();
        return ctx.body = format(200);
    } else {
        return ctx.body = format(400, {}, "email or password not match")
    }
});

module.exports = authRouter;