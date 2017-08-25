import Meta from '../meta'

export default {

  create (req, args) {
    if (req.hasLogged) return Meta.Tag.create(args)
    else throw RangeError('Permission deny')
  },

  update (req, args) {
    if (req.hasLogged) return Meta.Tag.update(args)
    else throw RangeError('Permission deny')
  },

  retrieve (req, slug) {
    return Meta.Tag.retrieve(slug)
  },

  multipleRetrieve (req, order, offset, limit) {
    return Meta.Tag.multipleRetrieve(order, offset, limit)
  },

  delete (req, slug) {
    if (req.hasLogged) return Meta.Tag.delete(slug)
    else throw RangeError('Permission deny.')
  }
}
