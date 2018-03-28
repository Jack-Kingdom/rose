module.exports = {
    port: 23570,
    session_secret: 'secret string',
    sessionTimeout: 7 * 24 * 60 * 60 * 1000,

    db_config: {
        connectionLimit: 25,
        host: 'localhost',
        user: 'root',
        password: 'qiaohong',
        database: 'rose'
    }
};
