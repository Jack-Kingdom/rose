import Meta from '../meta'

export default {

  retrieve (req, slug) {
    try {
      const article = Meta.Article.retrieve(slug)
      if (article) {
        if (article.status === 'published') return article
        else return req.hasLogged ? article : {}
      } else return {}
    } catch (err) {
      return {error: err.message}
    }
  },

  multipleRetrieve (req, order, offset, limit, status) {
    if (!(typeof (order) === 'string')) throw RangeError('order argument illegal')
    // todo
    if (status === 'published' || req.hasLogged) {
      return Meta.Article.multipleRetrieve(order, offset, limit, {status: status})
    } else throw Error('Permission deny.')
  }
}