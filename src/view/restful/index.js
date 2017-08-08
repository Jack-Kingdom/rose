"use strict";

import express from 'express';
import restfulV1 from './v1';

const restfulRouter = express.Router();

restfulRouter.use('/v1', restfulV1);

export default restfulRouter;