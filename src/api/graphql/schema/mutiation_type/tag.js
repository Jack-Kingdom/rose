import MutationReturnType from '../types/return'
import Meta from '../../../../meta'

const factory = require('./factory')

module.exports = {
  createTag: {
    type: MutationReturnType,
    args: require('../types/tag'),
    resolve: (parent, args, req) => factory(req, () => Meta.Tag.create(args))
  },

  deleteTag: {
    type: MutationReturnType,
    args: require('../types/id'),
    resolve: (parent, args, req) => factory(req, () => Meta.Tag.delete(args.id))
  },

  updateTag: {
    type: MutationReturnType,
    args: Object.assign({}, require('../types/id'), require('../types/tag')),
    resolve: (parent, args, req) => factory(req, () => {
      const id = args.id
      delete args.id
      return Meta.Tag.update(id, args)
    })
  }
}
