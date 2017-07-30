"use strict";

import express from 'express';
import bodyParser from 'body-parser';
import logger from '../../logic/logger';

const authRouter = express.Router();
authRouter.use(bodyParser.json());
authRouter.use((err, req, res, next) => {
    if (err) {
        logger.warn('body-parse error', req);
        res.sendStatus(400);
    } else {
        next()
    }
});

authRouter.post('/register', async (req, res) => {

});

authRouter.post('/login', async (req, res) => {
    console.log(req);
    if (!req.body) {
        res.send("fails");
    } else {
        res.send("hello-world");
    }
});


export default authRouter;