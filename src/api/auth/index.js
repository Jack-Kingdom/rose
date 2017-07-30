"use strict";

import express from 'express';
import bodyParser from 'body-parser';
import Auth from '../../logic/auth';
import logger from '../../logic/logger';
import models from "../../persistence/models/index";

const authRouter = express.Router();
authRouter.use(bodyParser.json());
authRouter.use((err, req, res, next) => {
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


export default authRouter;