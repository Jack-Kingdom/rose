import { GraphQLID } from 'graphql'
import MutationReturnType from '../types/return'
import Meta from '../../../../meta'

// todo: add permission check
module.exports = {

  createArticle: {
    type: MutationReturnType,
    args: require('../types/article'),
    resolve: async (parent, args, req) => {
      if (!req.hasLogged) return {success: false, msg: 'Permission deny.'}
      try {
        await Meta.Article.create(args)
        return {success: true}
      } catch (err) {
        return {success: false, msg: err.message}
      }
    }
  },

  deleteArticle: {
    type: GraphQLID,
    args: require('../types/id'),
    resolve: async (parent, args, req) => {
      await Meta.Article.delete(args.id)
    }
  },

  updateArticle: {
    type: GraphQLID,
    args: Object.assign({}, require('../types/id'), require('../types/article')),
    resolve: async (parent, args, req) => {
      const id = args.id
      delete args.id
      await Meta.Article.update(id, args)
    }
  }
}
