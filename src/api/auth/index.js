"use strict";

import express from 'express';
import bodyParser from 'body-parser';
import logger from '../../logic/logger';

const authRouter = express.Router();
authRouter.use(bodyParser.json());
authRouter.use((err, req, res, next) => {
    if (err) {
        logger.warn({event:'body parse error'});
        res.sendStatus(400);
    } else {
        next()
    }
});

authRouter.post('/register', async (req, res) => {

});

authRouter.post('/login', async (req, res) => {

});


export default authRouter;