module.exports = {
    port: 3000,
    session_secret: 'secret string',
    // mongodbUrl: 'mongodb://192.168.1.107:27017/DevRose',
    mongodbUrl: 'mongodb://192.168.4.60:27017/DevRose',
    openRegister: true,
    graphqlMaxDepth: 1,

    // value: 1 week
    sessionTimeout: 7 * 24 * 60 * 60 * 1000
};
