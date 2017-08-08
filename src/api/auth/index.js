"use strict";

import express from 'express';
import bodyParser from 'body-parser';
import isEmail from 'validator/lib/isEmail';
import Auth from '../../meta/auth';
import logger from '../../utils/logger';

const authRouter = express.Router();

// use body-parser to load json data
authRouter.use(bodyParser.json());

// todo rewrite log print
authRouter.post('/register', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        if (!(typeof (email) === 'string' && isEmail(email))) throw new RangeError('email type illegal.');
        if (!(typeof (password) === 'string')) throw new RangeError('password type illegal.');
    } catch (err) {
        logger.info({event: 'register with illegal args', msg: err.message});
        return res.json({success: false, msg: err.message});
    }

    try {
        await Auth.register(email, password);
        req.session.hasLogged = true;
        logger.info({account: email, event: 'register success'});
        return res.json({success: true});
    } catch (err) {
        logger.info({account: email, event: 'register fails', msg: err.message});
        return res.json({success: false, msg: err.message});
    }

});

authRouter.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        if (!(typeof (email) === 'string' && isEmail(email))) throw new RangeError('email type illegal.');
        if (!(typeof (password) === 'string')) throw new RangeError('password type illegal.');
    } catch (err) {
        logger.info({event: 'login with illegal args', msg: err.message});
        return res.json({success: false, msg: err.message});
    }

    try {
        await Auth.login(email, password);
        req.session.hasLogged = true;
        logger.info({account: email, event: 'login success'});
        return res.json({success: true});
    } catch (err) {
        logger.info({account: email, event: 'login fails', msg: err.message});
        return res.json({success: false, msg: "email or password not match"})
    }
});

authRouter.use('/logout', async (req, res) => {
    if (req.session.hasLogged) {
        req.session.hasLogged = false;
        return res.json({success: true, msg: "you has been logged out"});
    } else {
        return res.json({success: false, msg: "please login first"});
    }
});

authRouter.post('/change-password', async (req, res) => {
    const email = req.body.email;
    const originPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;

    try {
        if (!(typeof (email) === 'string' && isEmail(email))) throw new RangeError('email type illegal.');
        if (!(typeof (originPassword) === 'string')) throw new RangeError('origin password type illegal.');
        if (!(typeof (newPassword) === 'string')) throw new RangeError('new password type illegal.');
    } catch (err) {
        logger.info({event: 'change-password with illegal args', msg: err.message});
        return res.json({success: false, msg: err.message});
    }

    try {
        await Auth.changePassword(email, originPassword, newPassword);
        logger.info({account: email, event: 'change password success'});
        return res.json({success: true});
    } catch (err) {
        logger.info({account: email, event: 'change password success'});
        return res.json({success: false, msg: "origin password not match"})
    }
});

// catch err
authRouter.use((err, req, res, next) => {
    if (err) {
        logger.error({event: 'authRouter-error', msg: err.message});
        return res.status(500);
    }
    else next();
});

module.exports = authRouter;
