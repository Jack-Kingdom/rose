"use strict";

import express from 'express'
import models from '../../../persistence/models/index';

const router = express.Router();

router.get('/articles', async (req, res) => {
    let sort = req.query['sort'] || 'id';
    let limit = req.query['limit'] || 10;

    console.log(sort);
    try {
        const data = await models.Article.find().sort(sort).limit(limit);
        return res.json(data);
    } catch (err) {
        return res.json({error: err})
    }
});

module.exports = router;