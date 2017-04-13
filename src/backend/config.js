/**
 * Created by Jack on 4/4/2017.
 */

let path = require('path');

let productionConfig = {
    // modified it to false on development environment
    debug: false,

    // listening port
    port: 3000,

    // app's base dir
    appRoot: path.join(__dirname, '../..'),

    database: {
        username: 'root',
        password: 'qiaohong',
        database: "rose",

        option: {
            host: 'localhost',
            dialect: "mysql",

            pool: {
                max: 5,
                min: 0,
                idle: 10000
            },

            logging: false,
            freezeTableName: true,
        }
    },
};

let developmentConfig = {
    // modified it to false on development environment
    debug: true,

    // listening port
    port: 3000,

    // app's base dir
    appRoot: path.join(__dirname, '../..'),

    // database config
    database: {
        username: 'root',
        password: 'qiaohong',
        database: "rose",

        options: {
            host: 'localhost',
            dialect: "mysql",

            pool: {
                max: 5,
                min: 0,
                idle: 10000
            },

            logging: true,
            benchmark:true,
            freezeTableName: true,
        }
    },
};

let config = null;
switch (process.env.NODE_ENV) {
    case 'production':
        config = productionConfig;
        break;
    default:
        config = developmentConfig;
        break;
}
export default developmentConfig;