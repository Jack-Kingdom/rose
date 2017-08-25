import { GraphQLObjectType, GraphQLList } from 'graphql'
import ArticleQueryType from './article'
import CategoryQueryType from './category'
import TagQueryType from './tag'
import Ops from '../../../../ops'

const QueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'RootQueryType',
  fields: () => ({
    categories: {
      type: new GraphQLList(CategoryQueryType),
      args: require('../types/constraint'),
      resolve: async (parent, args) => Ops.Category.retrieveMultiple(args.order, args.offset, args.limit)
    },

    tags: {
      type: new GraphQLList(TagQueryType),
      args: require('../types/constraint'),
      resolve: async (parent, args) => Ops.Tag.retrieveMultiple(args.order, args.offset, args.limit)
    },

    articles: {
      type: new GraphQLList(ArticleQueryType),
      args: require('../types/constraint'),
      resolve: async (parent, args) => Ops.Article.retrieveMultiple(args.order, args.offset, args.limit)
    },

    category: {
      type: CategoryQueryType,
      args: require('../types/slug'),
      resolve: async (parent, args) => Ops.Category.retrieve(args.id)
    },

    tag: {
      type: TagQueryType,
      args: require('../types/slug'),
      resolve: async (parent, args) => Ops.Tag.retrieve(args.id)
    },

    article: {
      type: ArticleQueryType,
      args: require('../types/slug'),
      resolve: async (parent, args, req) => Ops.Article.retrieve(req, args.slug)
    }
  })
})

export default QueryType
