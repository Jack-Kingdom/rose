import express from 'express'
import Ops from '../../../ops'
import logger from '../../../utils/logger'

const router = express.Router()

router.get('/articles', async (req, res) => {
  const order = req.query.order || 'updateAt'
  const offset = req.query.offset || 0
  const limit = req.query.limit || 10
  const status = req.query.status || 'published'

  const data = await Ops.Article.multipleRetrieve(req, order, offset, limit, {status: status})
  return res.json(data)
})

router.get('/articles/:slug', async (req, res) => {
  logger.info('fetch single article', req.params)

  const data = await Ops.Article.retrieve(req, req.params.slug)
  return res.json(data)
})

module.exports = router
