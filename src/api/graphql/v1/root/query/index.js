import Ops from '../../../../../ops'
import Config from '../../../../../../config'
import { Article, MultiArticle } from './article'
import { Category, MultiCategory } from './category'
import { Tag, MultiTag } from './tag'

export default {
  articles: async (args, req, node) => {
    // todo tag and category's articles
    const articles = Ops.Article.multipleRetrieve(req, args.order, args.offset, args.limit, args.status)
    return new MultiArticle(req, articles, 0)
  },

  article: async (args, req, node) => {
    const article = await Ops.Article.retrieve(req, args.slug)
    return new Article(req, article, 0)
  },

  categories: (args, req, node) => {
    // todo tag and category's articles
    return Ops.Category.multipleRetrieve(req, args.order, args.offset, args.limit)
  },

  category: (args, req, node) => {
    return Ops.Category.retrieve(req, args.slug)
  },

  tags: (args, req, node) => {
    // todo tag and category's articles
    console.log('tags queried')
    return Ops.Tag.multipleRetrieve(req, args.order, args.offset, args.limit)
  },

  tag: (args, req, node) => {
    console.log('tags queried')
    return Ops.Tag.retrieve(req, args.slug)
  }

}