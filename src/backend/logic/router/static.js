/**
 * Created by Jack on 4/12/2017.
 */

import express from 'express'
import path from 'path'
import config from '../../config'

let staticRouter = express.Router();

// js file
staticRouter.use('/js', express.static(path.join(config.appRoot, 'build/frontend/js')));

// css file
staticRouter.use('/css', express.static(path.join(config.appRoot, 'build/frontend/css')));

// img file
staticRouter.use('/img', express.static(path.join(config.appRoot, 'build/frontend/img')));

// home html file
staticRouter.get('/*', (req, res) => {
    res.sendFile(path.join(config.appRoot, 'build/frontend/index.html'));
});

export default staticRouter;