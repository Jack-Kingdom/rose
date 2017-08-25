import Ops from '../../../../../ops'

export default {
  tags: (args, req, node) => {
    // todo tag and category's articles
    return Ops.Tag.multipleRetrieve(req, args.order, args.offset, args.limit)
  },

  tag: (args, req, node) => {
    return Ops.Tag.retrieve(req, args.slug)
  }
}
