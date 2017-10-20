import Ops from '../../../../../ops'
import Config from '../../../../../../config'
import TagQuery from './tag'

class ArticleQuery {
  constructor (article, depth = 0) {
    if (depth > Config.graphqlMaxDepth) throw new RangeError(`depth with ${depth} too high.`)

    for (const attr in article) if (article.hasOwnProperty(attr)) this[attr] = article[attr]

    this.tags = async (args, req, node) => {
      const tags = article.tags.map((slug) => Ops.Tag.retrieve(req, slug))
      return tags.map(async (tag) => new TagQuery(await tag, depth + 1))
    }
  }
}

export default ArticleQuery
