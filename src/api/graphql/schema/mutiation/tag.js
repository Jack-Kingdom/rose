import MutationReturnType from '../types/return'
import Ops from '../../../../ops'

module.exports = {
  createTag: {
    type: MutationReturnType,
    args: require('../types/tag'),
    resolve: (parent, args, req) => Ops.Tag.create(req, args)
  },

  deleteTag: {
    type: MutationReturnType,
    args: require('../types/slug'),
    resolve: (parent, args, req) => Ops.Tag.delete(req, args.slug)
  },

  updateTag: {
    type: MutationReturnType,
    args: Object.assign({}, require('../types/slug'), require('../types/tag')),
    resolve: (parent, args, req) => Ops.Tag.update(req, args)
  }
}
