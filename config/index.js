"use strict";
exports.__esModule = true;
var development_1 = require("./development");
var production_1 = require("./production");
var test_1 = require("./test");
/**
 * This function used to merge two config.
 * Any value in patchConfig will overwrite originConfig's that with the same key.
 * If some field that originConfig not have, this field will be add.
 * @param {configInterface} originConfig
 * @param {configInterface} patchConfig
 * @return {configInterface}
 * @private
 */
function _mergeConfig(originConfig, patchConfig) {
    for (var i in patchConfig)
        originConfig[i] = patchConfig[i];
    return originConfig;
}
var config = null;
var env = process.env.NODE_ENV;
console.log("application run under " + env + " environment.");
switch (env) {
    case 'development':
        config = development_1["default"];
        break;
    case 'production':
        config = _mergeConfig(development_1["default"], production_1["default"]);
        break;
    case 'test':
        config = _mergeConfig(development_1["default"], test_1["default"]);
        break;
    default:
        throw new Error("env " + env + " not match any config");
}
exports["default"] = config;
