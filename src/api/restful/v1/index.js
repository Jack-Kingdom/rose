"use strict";

import express from 'express';

const restfulRouter = express.Router();

restfulRouter.use(require('./article'));

export default restfulRouter;