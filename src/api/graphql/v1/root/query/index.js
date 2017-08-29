import Ops from '../../../../../ops'
import Config from '../../../../../../config'
import ArticleQuery from './article'
import TagQuery from './tag'

export default {
  articles: async (args, req, node) => {
    const articles = await Ops.Article.multipleRetrieve(req, args.order, args.offset, args.limit, args.status)
    return articles.map((article) => new ArticleQuery(req, article))
  },

  article: async (args, req, node) => {
    const article = await Ops.Article.retrieve(req, args.slug)
    return new ArticleQuery(req, article)
  },

  tags: async (args, req, node) => {
    const tags = await Ops.Tag.multipleRetrieve(req, args.order, args.offset, args.limit)
    return tags.map((tag) => new TagQuery(req, tag))
  },

  tag: async (args, req, node) => {
    const tag = await Ops.Tag.retrieve(req, args.slug)
    return new TagQuery(req, tag)
  }
}