"use strict";

import express from 'express'
import models from '../../../persistence/models/index';

const router = express.Router();

router.get('/articles', async (req, res) => {
    try {
        const data = await models.Article.find();
        res.type('application/json');
        return res.send(data);
    } catch (err) {
        return res.send({error: err})
    }
});

module.exports = router;