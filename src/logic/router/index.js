"use strict";

import express from 'express';
import authRouter from '../../api/auth';
import restfulRouter from '../../api/restful';
import graphqlRouter from '../../api/graphql';

const router = express.Router();

router.use('/api/auth',authRouter);
router.use('/api/v1',restfulRouter);
router.use('/api/graphql',graphqlRouter);

export default router;