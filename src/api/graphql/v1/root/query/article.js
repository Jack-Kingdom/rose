import Ops from '../../../../../ops'

export default {
  articles: async (args, req, node) => {
    // todo tag and category's articles
    return Ops.Article.multipleRetrieve(req, args.order, args.offset, args.limit, args.status)
  },

  article: (args, req, node) => {
    return Ops.Article.retrieve(req, args.slug)
  }
}
