import Meta from '../meta'
import decorator from '../utils/decorator'

// todo operate article and tag's relation here

export default {

  @decorator.loginRequired
  async create (req, args) {
    await Meta.Article.create(args)
  },

  @decorator.loginRequired
  async remove (req, slug) {
    await Meta.Article.remove(slug)
  },

  @decorator.loginRequired
  async update (req, slug, args) {
    await Meta.Article.update(slug, args)
  },

  async retrieve (req, slug) {
    const article = await Meta.Article.retrieve(slug)
    if (article && (req.hasLogged || article.status === 'published')) return article
    else return {error: `article with slug ${slug} not exist`}
  },

  async multipleRetrieve (req, order, offset, limit, conditions) {
    if (!(conditions.status === 'published' || req.hasLogged)) throw new Error('Permission deny.')

    return Meta.Article.multipleRetrieve(order, offset, limit, conditions)
  }
}
