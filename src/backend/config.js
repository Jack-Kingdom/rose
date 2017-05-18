/**
 * Created by Jack on 4/4/2017.
 */

let path = require('path');

let productionConfig = {
    // modified it to false on development environment
    debug: false,

    // listening port
    port: 3000,

    // app's base dir
    appRoot: path.join(__dirname, '../..'),

    // session's secret string, modified it in production environment
    session_secret: 'secret string',

    mongodbUrl: 'mongodb://localhost:27017/Rose',
};

let developmentConfig = {
    // modified it to false on development environmente
    debug: true,

    // listening port
    port: 3000,

    // app's base dir
    appRoot: path.join(__dirname, '../..'),

    // session's secret string, modified it in production environment
    session_secret: 'secret string',

    // database config
    mongodbUrl: 'mongodb://localhost:27017/Rose',

};

let config = null;
switch (process.env.NODE_ENV) {
    case 'production':
        config = productionConfig;
        break;
    default:
        config = developmentConfig;
        break;
}
module.exports = config;