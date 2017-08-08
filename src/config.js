"use strict";

const developmentConfig = {

    // modified it to false on development environment
    debug: true,

    // listening port
    port: 3000,

    // session's secret string, modified it in production environment
    session_secret: 'secret string',

    mongodbUrl: 'mongodb://localhost:27017/DevRose',
};

const productionConfig = {
    debug: false,
    session_secret: "secret string",
    mongodbUrl: 'mongodb://localhost:27017/Rose',
};

console.log(`NODE_ENV set to ${process.env.NODE_ENV}`);

let config = {};
for (let attr in developmentConfig) config[attr] = developmentConfig[attr];
if (process.env.NODE_ENV === 'production') {
    for (let attr in developmentConfig) config[attr] = developmentConfig[attr];
    //todo
}

export default config;