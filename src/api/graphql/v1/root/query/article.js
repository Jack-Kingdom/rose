import Ops from '../../../../../ops'
import CategoryQuery from './category'
import TagQuery from './tag'

class Article {
  constructor (article) {
    // article.forEach((attr) => this[attr] = article[attr])
    // article.forEach((attr) => console.log(attr))
    this.slug = article.slug
    this.title = article.title
    // this.tags = [{slug:"a",title:"hello"}]

  }

  tags (args, req, node) {
    console.log(node)
  }
}

export default {
  articles: async (args, req, node) => {
    // todo tag and category's articles
    // articles.forEach((article) => article.tags.map((slug) => Ops.Tag.retrieve(req, slug)))
    return Ops.Article.multipleRetrieve(req, args.order, args.offset, args.limit, args.status)
  },

  article: async (args, req, node) => {
    // let article = await Ops.Article.retrieve(req, args.slug)
    // return article
    return new Article(await Ops.Article.retrieve(req, args.slug))
  }
}
