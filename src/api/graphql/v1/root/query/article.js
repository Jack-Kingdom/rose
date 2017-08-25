import Ops from '../../../../../ops'

export default {
  articles: (args, req, node) => {
    // todo tag and category's articles
    let result = Ops.Article.multipleRetrieve(req, args.order, args.offset, args.limit, args.status)
    if(result.category)
    return result
  }
}