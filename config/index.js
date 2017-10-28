const developmentConfig = require("./development");
const productionConfig = require("./production");
const testConfig = require("./test");

let config = null;
const env = process.env.NODE_ENV;
console.log(`application run under ${env} environment`);

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
        throw new Error(`env ${env} not match any config`);
}

config.debug = !(env === 'production');

module.exports = config;
