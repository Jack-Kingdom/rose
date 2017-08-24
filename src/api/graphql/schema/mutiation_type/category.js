import MutationReturnType from '../types/return'
import Meta from '../../../../meta'

const factory = require('./factory')

module.exports = {
  createCategory: {
    type: MutationReturnType,
    args: require('../types/category'),
    resolve: (parent, args, req) => factory(req, () => Meta.Category.create(args))

  },

  deleteCategory: {
    type: MutationReturnType,
    args: require('../types/slug'),
    resolve: (parent, args, req) => factory(req, () => Meta.Category.retrieve(args.id))
  },

  updateCategory: {
    type: MutationReturnType,
    args: Object.assign({}, require('../types/slug'), require('../types/category')),
    resolve: (parent, args, req) => factory(req, () => {
      const id = args.id
      delete args.id
      return Meta.Category.update(id, args)
    })
  }
}
