import Ops from '../../../../../ops'

export default {
  articles: (args, req, node) => {
    let result = Ops.Article.multipleRetrieve(req, args.order, args.offset, args.limit, args.status)
    console.log(result)
    return result
  }
}