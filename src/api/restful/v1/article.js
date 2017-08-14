

import express from 'express';
import models from '../../../persistence/models/index';

const router = express.Router();

router.get('/articles', async (req, res) => {
  const sort = req.query.sort || 'id';
  const limit = req.query.limit || 10;

  console.log(sort);
  try {
    const data = await models.Article.find().sort(sort).limit(limit);
    return res.json(data);
  } catch (err) {
    return res.json({ error: err });
  }
});

module.exports = router;
