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

  multipleRetrieve (req, order, offset, limit, condition) {
    //todo type check

  }
}