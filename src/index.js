/**
 * Created by Jack on 4/12/2017.
 */

import express from 'express';
import session from 'express-session'
import bodyParser from 'body-parser';
import morgan from 'morgan';
import logger from './logic/logger';
import config from './config';
import router from './logic/router';

const app = express();

// load session
app.use(session({
    secret: config.session_secret,
    resave: false,
    saveUninitialized: false
}));

// load post json parse and bad request check
app.use(bodyParser.json());
app.use((err, req, res, next) => {
    if (err) {
        logger.warn(JSON.stringify({
            timestamp: Date.now(),
            event: "body parse error",
            source: req.headers['x-forwarded-for'] || req.ip
        }));
        res.sendStatus(400);
    }
    else next();
});

// load http logger
app.use(morgan('short'));

// load router
app.use(router);

// start app
app.listen(config.port, () => {
    console.log(`App started at port ${config.port}.`)
});