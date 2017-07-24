/**
 * Created by Jack on 4/4/2017.
 */

import path from 'path'

let developmentConfig = {

    // modified it to false on development environment
    debug: true,

    // listening port
    port: 3000,

    // app's base dir
    appRoot: path.join(__dirname, '../..'),

    // session's secret string, modified it in production environment
    session_secret: 'secret string',

    mongodbUrl: 'mongodb://localhost:27017/DevRose',

};

//overwrite development config at production environment
let productionConfig = {
    debug: false,
    session_secret: 'secret string',
    mongodbUrl: 'mongodb://localhost:27017/Rose',
};

let config = developmentConfig;
if (process.env.NODE_ENV === 'production') {
    for (let attr in productionConfig) {
        config[attr] = productionConfig[attr]
    }
}

module.exports = config;