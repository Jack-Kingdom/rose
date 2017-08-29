import Ops from '../../../../../ops'
import Config from '../../../../../../config'

export default {
  createArticle: async ({params}, req, node) => {
    // try {
    //   await Ops.Article.create(req, params)
    //   return {success: true}
    // } catch (err) {
    //   return {success: false, message: err.message}
    // }
    await Ops.Article.create(req, params)
  }
}
