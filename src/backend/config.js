/**
 * Created by Jack on 4/4/2017.
 */

let path = require('path');

let config = {
    // modified it to false on development environment
    debug: true,

    // listening port
    port: 3000,

    // app's base dir
    appRoot: path.join(__dirname, '../..'),

    database: {
        username: 'root',
        password: 'qiaohong',
        database: "rose",

        option: {
            host:'localhost',
            dialect: "mysql",

            pool: {
                max: 5,
                min: 0,
                idle: 10000
            },

            define: {
                timestamps: false,
                freezeTableName: true,
                logging:false,
            }
        }
    },
};

export default config;