import { GraphQLID } from 'graphql'
import Meta from '../../../../meta'

// todo: add permission check
module.exports = {

  createArticle: {
    type: require('../types/return'),
    args: require('../types/article'),
    resolve: async (parent, args, req) => {
      try {
        await Meta.Article.create(args)
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
