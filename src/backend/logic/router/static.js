/**
 * Created by Jack on 4/12/2017.
 */

import express from 'express'
import path from 'path'
import config from '../../config'

let router = express.Router();

// home html file
router.get('/', (req, res) => {
    res.sendFile(path.join(config.appRoot, 'build/frontend/home.html'));
});

// admin html file
router.get('/admin', (req, res) => {
    res.sendFile(path.join(config.appRoot, 'build/frontend/admin.html'));
});

// js file
router.use('/js', express.static(path.join(config.appRoot, 'build/frontend/js')));

// img file
router.use('/img', express.static(path.join(config.appRoot, 'build/frontend/img')));

export default router;