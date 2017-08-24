import MutationReturnType from '../types/return'
import Ops from '../../../../ops'


module.exports = {

  createArticle: {
    type: MutationReturnType,
    args: require('../types/article'),
    resolve: (parent, args, req) => Ops.Article.create(req, args)
  },

  deleteArticle: {
    type: MutationReturnType,
    args: require('../types/slug'),
    resolve: (parent, args, req) => Ops.Article.delete(req, args.slug)
  },

  updateArticle: {
    type: MutationReturnType,
    args: Object.assign({}, require('../types/slug'), require('../types/article')),
    resolve: (parent, args, req) => Ops.Article.update(req, args)
  }
}
