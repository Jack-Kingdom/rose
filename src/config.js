import path from 'path'
import logger from './utils/logger';

let developmentConfig = {

    // modified it to false on development environment
    debug: true,

    // listening port
    port: 3000,

    // session's secret string, modified it in production environment
    session_secret: 'secret string',

    mongodbUrl: 'mongodb://localhost:27017/DevRose',
};

let productionConfig = {
    debug: false,
    session_secret: "secret string",
    mongodbUrl: 'mongodb://localhost:27017/Rose',
};

let config = developmentConfig;
logger.info(`NODE_ENV set to ${process.env.NODE_ENV || 'development'}`);
if (process.env.NODE_ENV === 'production') {
    for (let attr in productionConfig) {
        config[attr] = productionConfig[attr]
    }
}

export default config;