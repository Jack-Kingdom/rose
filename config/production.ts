import configInterface from './interface/index'

const productionConfig: configInterface = {
    debug: false,
    session_secret: 'secret string',
    mongodbUrl: 'mongodb://localhost:27017/Rose',
    openRegister: false, // not supported on current version, please keep it false
};

export default productionConfig;