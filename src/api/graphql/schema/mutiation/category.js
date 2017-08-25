import { GraphQLString, GraphQLNonNull, GraphQLInputObjectType } from 'graphql'
import MutationReturnType from '../types/return'
import Ops from '../../../../ops'

module.exports = {
  createCategory: {
    type: MutationReturnType,
    args: require('../types/category'),
    resolve: (parent, args, req) => Ops.Category.create(args)

  },

  deleteCategory: {
    type: MutationReturnType,
    args: {
      slug: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve: (parent, args, req) => Ops.Category.retrieve(args.slug)
  },

  updateCategory: {
    type: MutationReturnType,
    args: Object.assign({}, require('../types/slug'), require('../types/category')),
    resolve: (parent, args, req) => Ops.Category.update(args)

  }
}
