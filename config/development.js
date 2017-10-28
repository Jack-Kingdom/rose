module.exports = {
    port: 3000,
    session_secret: 'secret string',
    mongodbUrl: 'mongodb://192.168.1.107:27017/DevRose',
    openRegister: true,
    graphqlMaxDepth: 1,

    // unit: second, value: 1 week
    sessionTimeout: 7 * 24 * 60 * 60
};
