import Ops from '../../../../../ops'

export default {
  tags: (args, req, node) => {
    // todo tag and category's articles
    console.log(node)
    return Ops.Tag.multipleRetrieve(req, args.order, args.offset, args.limit)
  },

  tag: (args, req, node) => {
    console.log(node)
    return Ops.Tag.retrieve(req, args.slug)
  }
}
