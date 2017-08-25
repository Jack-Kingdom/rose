import Meta from '../meta'

export default {

  create (req, args) {

  },

  update (req, args) {

  },

  retrieve (req, slug) {
    return Meta.Category.retrieve(slug)
  },

  multipleRetrieve (req, order, offset, limit) {
    return Meta.Category.multipleRetrieve(order, offset, limit)
  },

  delete (req, slug) {
    if (!req.hasLogged) throw RangeError('Permission deny.')
  }
}
