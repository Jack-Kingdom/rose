import Ops from '../../../../../ops'
import Config from '../../../../../../config'


class Tag {
  constructor (req, tag, depth) {
    if (depth > Config.graphqlMaxDepth) throw new RangeError(`depth with ${depth} too high.`)

    for (const attr in tag) if (tag.hasOwnProperty(attr)) this[attr] = tag[attr]

    // todo query tag's articles
    // this.articles =
  }
}

class MultiTag {
  constructor (req, tags, depth) {
    this.slug = ['123']
    this.title = ['hello']
  }
}

export {
  Tag,
  MultiTag
}
