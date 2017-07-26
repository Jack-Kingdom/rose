"use strict";

import express from 'express'
import models from '../../persistence/models';

const router = express.Router();

router.get('/articles', async (req, res) => {
    let data = null;
    try {
        data = await models.Article.find()
    } catch (Exception) {
        res.send({error: Exception})
    }
    res.type('application/json');
    res.send(data);
});

module.exports = router;