"use strict";

const developmentConfig = {
    // listening port
    port: 3000,

    session_secret: 'secret string',

    mongodbUrl: 'mongodb://localhost:27017/DevRose',
};

// rewrite those config under production environment
const productionConfig = {
    session_secret: "secret string",
    mongodbUrl: 'mongodb://localhost:27017/Rose',
};

console.log(`NODE_ENV set to ${process.env.NODE_ENV}`);

let config = developmentConfig;
config.debug = (process.env.NODE_ENV === 'production');
if (process.env.NODE_ENV === 'production') Object.assign(config, productionConfig);

export default config;