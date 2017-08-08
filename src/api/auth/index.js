"use strict";

import express from 'express';
import bodyParser from 'body-parser';
import Auth from '../../logic/auth';
import logger from '../../utils/logger';

// todo: add csrf check

const authRouter = express.Router();

// use body-parser to load json data
authRouter.use(bodyParser.json());

authRouter.post('/register', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (email && password) {
        try {
            await Auth.register(email, password);
            req.session.hasLogged = true;
            res.json({success: true});
        } catch (err) {
            res.json({success: false, message: err.message});
        }
    } else res.sendStatus(400);
});

authRouter.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (email && password) {
        try {
            await Auth.login(email, password);
            req.session.hasLogged = true;
            res.json({success: true});
        } catch (err) {
            res.json({success: false, message: "email or password not match"})
        }
    } else res.sendStatus(400);
});

authRouter.use('/logout', async (req, res) => {
    if (req.session.hasLogged) {
        req.session.hasLogged = false;
        res.json({success: true, message: "you has been logged out"});
    } else {
        res.json({success: false, message: "please login first"});
    }
});

authRouter.use('/check-logged', async (req, res) => {
    if (req.session.hasLogged) res.json({hasLogged: true});
    else res.json({hasLogged: false});
});

authRouter.post('/change-password', async (req, res) => {
    const email = req.body.email;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;
    if (email && oldPassword && newPassword) {
        try {
            await Auth.changePassword(email, oldPassword, newPassword);
            res.json({success: true});
        } catch (err) {
            res.json({success: false, message: "old password not match"})
        }
    } else res.sendStatus(400);
});

// catch err
authRouter.use((err, req, res, next) => {
    if (err) {
        logger.warn(`authRouter-error: ${err.message}`);
        res.status(400).json({error:err.message});
    }
    else next();
});

export default authRouter;