import { GraphQLString } from 'graphql'
import Meta from '../../../../meta'

module.exports = {
  createCategory: {
    type: GraphQLString,
    args: require('../types/category'),
    resolve: async (root, args) => Meta.Category.create(args)
  },

  // todo: remove article's category id
  deleteCategory: {
    type: GraphQLString,
    args: require('../types/id'),
    resolve: async (root, args) => Meta.Category.retrieve(args.id)
  },

  updateCategory: {
    type: GraphQLString,
    args: Object.assign({}, require('../types/id'), require('../types/category')),
    resolve: async (root, args) => {
      const id = args.id
      delete args.id
      return Meta.Category.update(id, args)
    }
  }
}
