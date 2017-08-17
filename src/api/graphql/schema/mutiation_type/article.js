import MutationReturnType from '../types/return'
import Meta from '../../../../meta'

const factory = require('./factory')

module.exports = {

  createArticle: {
    type: MutationReturnType,
    args: require('../types/article'),
    resolve: (parent, args, req) => factory(req, () => Meta.Article.create(args))
  },

  deleteArticle: {
    type: MutationReturnType,
    args: require('../types/id'),
    resolve: (parent, args, req) => factory(req, () => Meta.Article.delete(args.id))
  },

  updateArticle: {
    type: MutationReturnType,
    args: Object.assign({}, require('../types/id'), require('../types/article')),
    resolve: (parent, args, req) => factory(req, () => {
      const id = args.id
      delete args.id
      return Meta.Article.update(id, args)
    })
  }
}
