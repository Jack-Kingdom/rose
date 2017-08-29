import Ops from '../../../../../ops'
import Config from '../../../../../../config'
import { Category, MultiCategory } from './category'
import { Tag, MultiTag } from './tag'

class Article {
  constructor (req, article, depth) {
    if (depth > Config.graphqlMaxDepth) throw new RangeError(`depth with ${depth} too high.`)

    for (const attr in article) if (article.hasOwnProperty(attr)) this[attr] = article[attr]

    this.category = async () => {
      const category = Ops.Category.retrieve(req, article.category)
      return new Category(req, await category, depth + 1)
    }

    this.tags = async () => {
      const tags = article.tags.map((slug) => Ops.Tag.retrieve(req, slug))
      return tags.map(async (tag) => new Tag(req, await tag, depth + 1))
      // return new MultiTag(req, tags, depth + 1)
    }
  }
}

class MultiArticle {
  constructor (req, articles, depth) {
  }
}

export {
  Article,
  MultiArticle
}
