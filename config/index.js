import developmentConfig from './development';
import productionConfig from './production';
import testConfig from './test';

let config = null;
const env = process.env.NODE_ENV;

switch (env) {
    case 'development':
        config = developmentConfig;
        break;
    case 'production':
        config = Object.assign(developmentConfig, productionConfig);
        break;
    case 'test':
        config = Object.assign(developmentConfig, testConfig);
        break;
    default:
        throw RangeError(`env ${env} not match any config`);
}

config.debug = !(env === 'production');

export default config;