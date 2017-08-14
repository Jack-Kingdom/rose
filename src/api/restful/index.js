

import express from 'express';
import restfulV1 from './v1';
import models from '../../persistence/models/index';

const restfulRouter = express.Router();

restfulRouter.use('/v1', restfulV1);

module.exports = restfulRouter;
