"use strict";

import express from 'express';
import multer from 'multer';
import logger from '../../logic/logger';
import models from '../../persistence/models';

const mediaRouter = express.Router();
const upload = multer({
    inMemory: true,
    limits: {fileSize: 15 * 1024 * 1024},
}).single('media');

// todo add auth check here
// todo catch error here
mediaRouter.post('/upload', (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            logger.warn(`media upload error: ${err.message}`);
            res.sendStatus(400);
            return;
        }
        console.log('received file:', req.file, req.body);
        let media = new models.Media({slug: req.file.originalname, contentType: req.file.mimeTypes, data: req.file.buffer});
        await media.save();
        res.sendStatus(200);
    });
});

//todo
mediaRouter.get('slug', (req, res) => {

});

export default mediaRouter;