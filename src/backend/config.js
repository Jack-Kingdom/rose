import path from 'path'
import logger from './logic/logger';

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
    logger.info('application run under production env');
    for (let attr in productionConfig) {
        config[attr] = productionConfig[attr]
    }
} else {
    logger.info('application run under development env');
}

export default config;