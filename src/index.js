/**
 * Created by Jack on 4/12/2017.
 */

import express from 'express';
import session from 'express-session'
import morgan from 'morgan';
import config from './config';
import router from './logic/router';

const app = express();

// load session
app.use(session({
    secret: config.session_secret,
    resave: false,
    saveUninitialized: false
}));



// load http logger
app.use(morgan('short'));

// load router
app.use(router);

// start app
app.listen(config.port, () => {
    console.log(`App started at port ${config.port}.`)
});