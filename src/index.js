"use strict";

import express from 'express';
import config from './config';
import router from './router';

const app = express();

// load router
app.use(router);

// start app
app.listen(config.port, () => {
    console.log(`App started at port ${config.port}.`)
});