"use strict";

import express from 'express'
import models from '../../../persistence/models/index';

const router = express.Router();

router.get('/articles', async (req, res) => {
    try {
        const data = await models.Article.find();
        return res.json(data);
    } catch (err) {
        return res.json({error: err})
    }
});

module.exports = router;