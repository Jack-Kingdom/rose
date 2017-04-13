/**
 * Created by Jack on 4/12/2017.
 */

import express from 'express'
import morgan from 'morgan'
import config from './config'
import graphqlRouter from './api/graphql'
import staticRouter from './logic/router/static'

let app = express();

// load logger
app.use(morgan('short'));

// load graphql
app.use(graphqlRouter);

// static file router
app.use(staticRouter);

// start app
app.listen(config.port, () => {
    console.log("App started at port %s.", config.port)
});