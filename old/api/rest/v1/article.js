import express from 'express'
import Ops from '../../../ops'

const router = express.Router()

router.get('/articles', async (req, res) => {
  const order = req.query.order || 'updateAt'
  const offset = req.query.offset || 0
  const limit = req.query.limit || 10
  const status = req.query.status || 'published'

  try {
    const data = await Ops.Article.multipleRetrieve(req, order, offset, limit, {status: status})
    return res.json(data)
  } catch (err) {
    return res.json({error: err.message})
  }
})

module.exports = router
