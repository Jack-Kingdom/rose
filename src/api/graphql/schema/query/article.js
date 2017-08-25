import { GraphQLObjectType, GraphQLList } from 'graphql'
import CategoryQueryType from './category'
import TagQueryType from './tag'
import Ops from '../../../../ops'

const ArticleQueryType = new GraphQLObjectType({
  name: 'ArticleQueryType',
  description: 'Article\'s all fields here',
  fields: () => {
    const obj = require('../types/article')
    obj.category = {
      type: CategoryQueryType,
      resolve: async (parent, args) => Ops.Category.retrieve(parent.slug)
    }
    obj.tags = {
      type: new GraphQLList(TagQueryType),
      resolve: async (parent, args) => parent.tags.map(async slug => Ops.Tag.retrieve(slug))
    }
    return obj
  }
})

export default ArticleQueryType
