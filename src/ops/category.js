import logger from '../utils/logger'
import Meta from '../meta'

export default {

  create (req, args) {

  },

  update (req, args) {

  },

  retrieve (req, slug) {
    // logger.info()
    return Meta.Category.retrieve(slug)
  },

  multipleRetrieve (req, order, offset, limit, status) {
    if (!(typeof (order) === 'string')) throw TypeError('order argument illegal')

    // todo
    if (status === 'published' || req.hasLogged) {
      return Meta.Article.multipleRetrieve(order, offset, limit, {status: status})
    } else throw Error('Permission deny.')
  },

  delete (req, slug) {
    if (!(typeof (slug) === 'string' && slug.length > 0)) throw RangeError('slug argument illegal')

    if(!req.hasLogged) throw
  }
}