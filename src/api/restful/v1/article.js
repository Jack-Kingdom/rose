import express from 'express'
import Meta from '../../../meta'

const router = express.Router()

router.get('/articles', async (req, res) => {
  const order = req.query.order || 'updateAt'
  const offset = req.query.offset || 0
  const limit = req.query.limit || 10

  try {
    const data = await Meta.Article.retrieveMultiple(order, offset, limit)
    return res.json(data)
  } catch (err) {
    return res.json({error: err.message})
  }
})

module.exports = router
