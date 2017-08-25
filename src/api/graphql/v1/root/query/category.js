import Ops from '../../../../../ops'

export default {
  categories: (args, req, node) => {
    // todo tag and category's articles
    return Ops.Category.multipleRetrieve(req, args.order, args.offset, args.limit)
  },

  category: (args, req, node) => {
    return Ops.Category.retrieve(req, args.slug)
  }
}
