"use strict";

import express from 'express';
import bodyParser from 'body-parser';
import isEmail from 'validator/lib/isEmail';
import Auth from '../../meta/auth';
import logger from '../../utils/logger';

const authRouter = express.Router();

// use body-parser to load json data
authRouter.use(bodyParser.json());

authRouter.post('/register', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        if (!(typeof (email) === 'string' && isEmail(email))) throw new RangeError('email type illegal.');
        if (!(typeof (password) === 'string')) throw new RangeError('password type illegal.');
    } catch (err) {
        logger.info('register with illegal args', {msg: err.message});
        return res.json({success: false, msg: err.message});
    }

    try {
        await Auth.register(email, password);
        req.session.hasLogged = true;
        logger.info('register success', {account: email});
        return res.json({success: true});
    } catch (err) {
        logger.info('register fails', {account: email, msg: err.message});
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
        logger.info('login with illegal args', {msg: err.message});
        return res.json({success: false, msg: err.message});
    }

    try {
        await Auth.login(email, password);
        req.session.hasLogged = true;
        logger.info('login success', {account: email});
        return res.json({success: true});
    } catch (err) {
        logger.info('login fails', {account: email, msg: err.message});
        return res.json({success: false, msg: "email or password not match"})
    }
});

authRouter.use('/logout', async (req, res) => {
    if (req.session.hasLogged) {
        req.session.hasLogged = false;
        logger.info('logout success');
        return res.json({success: true});
    } else {
        logger.warn("account that haven't logged try to logout");
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
        logger.info('change-password with illegal args', {msg: err.message});
        return res.json({success: false, msg: err.message});
    }

    try {
        await Auth.changePassword(email, originPassword, newPassword);
        logger.info('change password success', {account: email});
        return res.json({success: true});
    } catch (err) {
        logger.info('change password success', {account: email});
        return res.json({success: false, msg: "origin password not match"})
    }
});

// catch err
authRouter.use((err, req, res, next) => {
    if (err) {
        logger.error('authRouter-error', {err: err});
        return res.status(500);
    }
    else next();
});

module.exports = authRouter;
