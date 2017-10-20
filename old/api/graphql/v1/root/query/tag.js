import Ops from '../../../../../ops'
import Config from '../../../../../../config'
import ArticleQuery from './article'

class TagQuery {
  constructor (tag, depth = 0) {
    if (depth > Config.graphqlMaxDepth) throw new RangeError(`depth with ${depth} too high.`)

    for (const attr in tag) if (tag.hasOwnProperty(attr)) this[attr] = tag[attr]

    this.articles = async ({order, offset, limit}, req, node) => {
      const articles = await Ops.Article.multipleRetrieve(req, order, offset, limit, {
        status: 'published',
        tags: {$all: [tag.slug]}
      })
      return articles.map((article) => new ArticleQuery(article, depth + 1))
    }
  }
}

export default TagQuery
