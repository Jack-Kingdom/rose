/**
 * Created by Jack on 4/12/2017.
 */

import express from 'express'
import morgan from 'morgan'
import config from './config'
import router from './logic/router'

let app = express();

// load logger
app.use(morgan('short'));

app.use(router);

// start app
app.listen(config.port, () => {
    console.log("App started at port %s.", config.port)
});