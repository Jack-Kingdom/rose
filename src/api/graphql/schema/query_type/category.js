import { GraphQLObjectType, GraphQLList } from 'graphql'
import ArticleQueryType from './article'
import Meta from '../../../../meta'

const CategoryQueryType = new GraphQLObjectType({
  name: 'Category',
  description: 'Category Info',
  fields: () => {
    const obj = Object.assign({}, require('../types/id'), require('../types/category'))
    obj.articles = {
      type: new GraphQLList(ArticleQueryType),
      args: require('../types/constraint'),
      resolve: async (parent, args) => Meta.Article.retrieveMultiple(args.order, args.offset, args.limit, {category: parent.id})
    }
    return obj
  }
})

export default CategoryQueryType
