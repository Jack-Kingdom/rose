"use strict";

import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import config from './config';

const router = express.Router();

// load session
router.use(session({
    secret: config.session_secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        HttpOnly: true,
        sameSite: 'strict',
    }
}));

// load http logger
router.use(morgan('short'));

router.use('/api/graphql', require('./view/graphql'));
router.use('/api/restful', require('./view/restful'));
router.use('/api/auth', require('./view/auth'));
router.use('/api/media', require('./view/media'));

export default router;