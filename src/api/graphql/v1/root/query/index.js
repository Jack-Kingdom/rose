import Ops from '../../../../../ops'
import Config from '../../../../../../config'
import ArticleQuery from './article'
import TagQuery from './tag'

export default {
  articles: async ({order, offset, limit, status}, req, node) => {
    const articles = await Ops.Article.multipleRetrieve(req, order, offset, limit, {status: status})
    return articles.map((article) => new ArticleQuery(article))
  },

  article: async ({slug}, req, node) => {
    const article = await Ops.Article.retrieve(req, slug)
    return new ArticleQuery(article)
  },

  tags: async ({order, offset, limit}, req, node) => {
    const tags = await Ops.Tag.multipleRetrieve(req, order, offset, limit)
    return tags.map((tag) => new TagQuery(tag))
  },

  tag: async ({slug}, req, node) => {
    const tag = await Ops.Tag.retrieve(slug)
    return new TagQuery(req, tag)
  }
}