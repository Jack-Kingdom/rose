module.exports = {
    port: 23570,
    session_secret: 'secret string',
    mongodbUrl: 'mongodb://180.79.242.195:27017/DevRose',
    openRegister: true,
    graphqlMaxDepth: 1,

    // value: 1 week
    sessionTimeout: 7 * 24 * 60 * 60 * 1000
};
