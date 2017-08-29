import Ops from '../../../../../ops'
import Config from '../../../../../../config'

class TagQuery {
  constructor (req, tag, depth = 0) {
    if (depth > Config.graphqlMaxDepth) throw new RangeError(`depth with ${depth} too high.`)

    for (const attr in tag) if (tag.hasOwnProperty(attr)) this[attr] = tag[attr]

    // todo query tag's articles
    // this.articles =
  }
}

export default TagQuery
