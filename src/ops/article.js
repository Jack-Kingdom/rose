import Meta from '../meta'

export default {

  async create (req, args) {
    if (!req.hasLogged) throw RangeError('Permission deny')

    return Meta.Article.create(args)
  },

  async remove (req, slug) {
    if (!req.hasLogged) throw RangeError('Permission deny')

    return Meta.Article.remove(slug)
  },

  async update (req, slug, args) {
    if (!req.hasLogged) throw RangeError('Permission deny')

    return Meta.Article.update(slug, args)
  },

  async retrieve (req, slug) {
    const article = await Meta.Article.retrieve(slug)
    if (article && (req.hasLogged || article.status === 'published')) return article
    else throw RangeError(`article with slug ${slug} not exist`)
  },

  async multipleRetrieve (req, order, offset, limit, status) {
    const articles = await Meta.Article.multipleRetrieve(order, offset, limit, {status: status})
    if (status === 'published' || req.hasLogged) return articles
    else throw Error('Permission deny.')
  },

}
