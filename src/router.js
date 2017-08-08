"use strict";

import express from 'express';
import authRouter from './view/auth/index';
import restfulRouter from './view/restful/index';
import graphqlRouter from './view/graphql/index';
import mediaRouter from './view/media/index';

const router = express.Router();

router.use('/api/auth', authRouter);
router.use('/api', restfulRouter);
router.use('/api/graphql', graphqlRouter);
router.use('/api/media', mediaRouter);

export default router;