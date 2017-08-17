import { GraphQLObjectType, GraphQLList } from 'graphql'
import ArticleQueryType from './article'
import Meta from '../../../../meta'

const TagQueryType = new GraphQLObjectType({
  name: 'Tag',
  description: 'Tag Info',
  fields: () => {
    const obj = Object.assign({}, require('../types/id'), require('../types/tag'))
    obj.articles = {
      type: new GraphQLList(ArticleQueryType),
      args: require('../types/constraint'),
      resolve: async (parent, args) => Meta.Article.retrieveMultiple(args.order, args.offset, args.limit, {tags: {$all: [parent.id]}})
    }
    return obj
  }
})

export default TagQueryType
