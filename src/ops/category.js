import Meta from '../meta'

export default {

  create (req, args) {
    if (!req.hasLogged) throw RangeError('Permission deny')

    return Meta.Category.create(args)
  },

  update (req, args) {
    if (req.hasLogged) return Meta.Category.update(args)
    else throw RangeError('Permission deny')
  },

  retrieve (req, slug) {
    return Meta.Category.retrieve(slug)
  },

  multipleRetrieve (req, order, offset, limit) {
    return Meta.Category.multipleRetrieve(order, offset, limit)
  },

  delete (req, slug) {
    if (req.hasLogged) return Meta.Category.delete(slug)
    else throw RangeError('Permission deny.')
  }
}
