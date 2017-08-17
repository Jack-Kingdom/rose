import { GraphQLObjectType, GraphQLList } from 'graphql'
import CategoryQueryType from './category'
import TagQueryType from './tag'
import Meta from '../../../../meta'

const ArticleQueryType = new GraphQLObjectType({
  name: 'Article',
  description: 'Article type',
  fields: () => {
    const obj = Object.assign({}, require('../types/id'), require('../types/article'))
    obj.category = {
      type: CategoryQueryType,
      resolve: async (parent, args) => Meta.Category.retrieve(parent.id)
    }
    obj.tags = {
      type: new GraphQLList(TagQueryType),
      resolve: async (parent, args) => parent.tags.map(async id => Meta.Tag.retrieve(id))
    }
    return obj
  }
})

export default ArticleQueryType
