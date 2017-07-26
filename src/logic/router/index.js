"use strict";

import express from 'express'
import restfulRouter from '../../api/restful'
import graphqlRouter from '../../api/graphql'

const router = express.Router();

router.use('/api/v1',restfulRouter);
router.use(graphqlRouter);

export default router;