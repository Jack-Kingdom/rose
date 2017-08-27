import Meta from '../meta'

export default {

  create (req, args) {
    if (!req.hasLogged) throw RangeError('Permission deny')

    return Meta.Tag.create(args)
  },

  remove (req, slug) {
    if (!req.hasLogged) throw RangeError('Permission deny')

    return Meta.Tag.delete(slug)
  },

  update (req, args) {
    if (!req.hasLogged) throw RangeError('Permission deny')

    return Meta.Tag.update(args)
  },

  retrieve (req, slug) {
    return Meta.Tag.retrieve(slug)
  },

  multipleRetrieve (req, order, offset, limit) {
    return Meta.Tag.multipleRetrieve(order, offset, limit)
  },
}
