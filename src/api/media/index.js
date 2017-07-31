"use strict";

import express from 'express';
import multer from 'multer';

const mediaRouter = express.Router();
const upload = multer({storage: "/tmp/rose/"});

// todo add auth check here

mediaRouter.post('/upload', upload.single('media'), (req, res) => {
    console.log('received file:', req.file,req.files);
    res.sendStatus(200);
});

//todo
mediaRouter.get('slug', (req, res) => {

});

export default mediaRouter;