import Meta from '../meta'
import decorator from '../utils/decorator'

export default {

  @decorator.loginRequired
  create (req, args) {
    return Meta.Tag.create(args)
  },

  @decorator.loginRequired
  remove (req, slug) {
    return Meta.Tag.delete(slug)
  },

  @decorator.loginRequired
  update (req, args) {
    return Meta.Tag.update(args)
  },

  retrieve (req, slug) {
    return Meta.Tag.retrieve(slug)
  },

  multipleRetrieve (req, order, offset, limit) {
    return Meta.Tag.multipleRetrieve(order, offset, limit)
  }
}
