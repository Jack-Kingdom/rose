import developmentConfig from './development'
import productionConfig from './production'
import testConfig from './test'

interface configInterface {
    [key: string]: number | string | boolean
}

/**
 * This function used to merge two config.
 * Any value in patchConfig will overwrite originConfig's that with the same key.
 * If some field that originConfig not have, this field will be add.
 * @param {configInterface} originConfig
 * @param {configInterface} patchConfig
 * @return {configInterface}
 * @private
 */
function _mergeConfig(originConfig: configInterface, patchConfig: configInterface): configInterface {
    for (let i in patchConfig) originConfig[i] = patchConfig[i];
    return originConfig;
}

let config: configInterface = null;

const env = process.env.NODE_ENV;
console.log(`application run under ${env} environment.`);

switch (env) {
    case 'development':
        config = developmentConfig;
        break;
    case 'production':
        config = _mergeConfig(developmentConfig, productionConfig);
        break;
    case 'test':
        config = _mergeConfig(developmentConfig, testConfig);
        break;
    default:
        throw new Error(`env ${env} not match any config`)
}

export default config
