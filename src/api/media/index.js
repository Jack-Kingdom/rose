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
        let media = new models.Media({
            slug: req.file.originalname,
            mimetype: req.file.mimeTypes,
            data: req.file.buffer
        });
        await media.save();
        res.sendStatus(200);
    });
});

//todo
mediaRouter.get('/download/:slug', async (req, res) => {
    const slug = req.params['slug'];
    console.log(slug);
    if (slug) {
        // const media = await models.Media.findOne({slug: slug});
        // console.log(media);
        // if(media){
        //     res.contentType(media.contentType);
        //     // res.write(media.data);
        //     res.end();
        // }
        models.Media.findOne({slug: slug}).exec((err, media) => {
            if(err) throw err;
            // console.log(media.contentType);
            // res.contentType(media.contentType);
            console.log(media.data);
            res.write(media.data);
            res.end();
        })
    }else{
        // not find return
        console.log(`arguments is ${slug}`);
        res.json(req.params);
    }
});

export default mediaRouter;