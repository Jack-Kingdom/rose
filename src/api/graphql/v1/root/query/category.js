import Ops from '../../../../../ops'
import Config from '../../../../../../config'


class Category {
  constructor (req, category, depth) {
    if (depth > Config.graphqlMaxDepth) throw new RangeError(`depth with ${depth} too high.`)

    for (const attr in category) if (category.hasOwnProperty(attr)) this[attr] = category[attr]
  }
}

class MultiCategory {
  constructor (req, categories, depth) {

  }
}

export {
  Category,
  MultiCategory
}
