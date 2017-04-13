/**
 * Created by Jack on 4/12/2017.
 */

import express from 'express'
import path from 'path'
import config from '../../config'

let staticRouter = express.Router();

// home html file
staticRouter.get('/', (req, res) => {
    res.sendFile(path.join(config.appRoot, 'build/frontend/home.html'));
});

// admin html file
staticRouter.get('/admin', (req, res) => {
    res.sendFile(path.join(config.appRoot, 'build/frontend/admin.html'));
});

// js file
staticRouter.use('/js', express.static(path.join(config.appRoot, 'build/frontend/js')));

// img file
staticRouter.use('/img', express.static(path.join(config.appRoot, 'build/frontend/img')));

export default staticRouter;