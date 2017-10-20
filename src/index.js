"use strict";
exports.__esModule = true;
var Koa = require("koa");
var config_1 = require("../config");
var app = new Koa();
app.use(function (ctx) {
    ctx.body = "hello koa";
});
app.listen(config_1["default"].port);
