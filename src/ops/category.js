import Meta from '../meta'

export default {

  create (req, args) {
    if (!req.hasLogged) throw RangeError('Permission deny')

    return Meta.Category.create(args)
  },

  remove (req, slug) {
    if (!req.hasLogged) throw RangeError('Permission deny')

    return Meta.Category.delete(slug)
  },

  update (req, args) {
    if (!req.hasLogged) throw RangeError('Permission deny')

    return Meta.Category.update(args)
  },

  retrieve (req, slug) {
    return Meta.Category.retrieve(slug)
  },

  multipleRetrieve (req, order, offset, limit) {
    return Meta.Category.multipleRetrieve(order, offset, limit)
  },
}
