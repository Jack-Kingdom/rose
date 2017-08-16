import { GraphQLString } from 'graphql'
import Meta from '../../../../meta'

module.exports = {
  createCategory: {
    type: GraphQLString,
    args: require('../types/category'),
    resolve: async (parent, args, req) => Meta.Category.create(args)
  },

  // todo: remove article's category id
  deleteCategory: {
    type: GraphQLString,
    args: require('../types/id'),
    resolve: async (parent, args, req) => Meta.Category.retrieve(args.id)
  },

  updateCategory: {
    type: GraphQLString,
    args: Object.assign({}, require('../types/id'), require('../types/category')),
    resolve: async (parent, args, req) => {
      const id = args.id
      delete args.id
      return Meta.Category.update(id, args)
    }
  }
}
