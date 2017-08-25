import Meta from '../meta'

export default {

  create (req, args) {

  },

  update (req, args) {

  },

  retrieve (req, slug) {
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
    if (!req.hasLogged) throw RangeError('Permission deny.')
  }
}
