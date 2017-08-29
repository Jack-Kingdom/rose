import Meta from '../meta'
import decorator from '../utils/decorator'

export default {

  @decorator.loginRequired
  async create (req, args) {
    return Meta.Article.create(args)
  },

  @decorator.loginRequired
  async remove (req, slug) {
    return Meta.Article.remove(slug)
  },

  @decorator.loginRequired
  async update (req, slug, args) {
    return Meta.Article.update(slug, args)
  },

  async retrieve (req, slug) {
    const article = await Meta.Article.retrieve(slug)
    if (article && (req.hasLogged || article.status === 'published')) return article
    else throw RangeError(`article with slug ${slug} not exist`)
  },

  async multipleRetrieve (req, order, offset, limit, conditions) {
    if (!(conditions.status === 'published' || req.hasLogged)) throw Error('Permission deny.')

    return Meta.Article.multipleRetrieve(order, offset, limit, conditions)
  },
}
