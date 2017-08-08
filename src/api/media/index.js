"use strict";

import express from 'express';
import multer from 'multer';
import logger from '../../utils/logger';
import models from '../../persistence/models';

const mediaRouter = express.Router();

// only media less than 15 MB allow to be upload
const upload = multer({inMemory: true, limits: {fileSize: 15 * 1024 * 1024},});

mediaRouter.post('/upload', upload.single('media'), async (req, res) => {
    try {
        if(!req.session.hasLogged) return res.sendStatus(401);
        let media = new models.Media({
            slug: req.file.originalname,
            mimetype: req.file.mimetype,
            data: req.file.buffer
        });
        await media.save();
        res.status(200).json({success: true});
    } catch (err) {
        logger.warn(`mediaRouter-upload-error: ${err.message}`);
        res.status(400).json({error: err.message});
    }
});

mediaRouter.get('/download/:slug', async (req, res) => {
    const slug = req.params['slug'];
    try {
        let media = await models.Media.findOne({slug: slug});
        if (media) res.set({'content-type': media.mimetype,}).send(media.data);
        else res.sendStatus(404);
    } catch (err) {
        logger.warn(`mediaRouter-download-error: ${err.message}`);
        res.status(400).json({error: err.message});
    }
});

// catch err
mediaRouter.use((err, req, res, next) => {
    if (err) {
        logger.warn(`mediaRouter-error: ${err.message}`);
        res.status(400).json({error: err.message});
    }
    else next();
});

export default mediaRouter;