

import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLEnumType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import ArticleQueryType from './article';
import CategoryQueryType from './category';
import TagQueryType from './tag';
import Meta from '../../../../meta';


const QueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'RootQueryType',
  fields: () => ({
    categories: {
      type: new GraphQLList(CategoryQueryType),
      args: require('../types/constraint'),
      resolve: async (root, args) => await Meta.Category.retrieveMultiple(args.order, args.offset, args.limit),
    },

    tags: {
      type: new GraphQLList(TagQueryType),
      args: require('../types/constraint'),
      resolve: async (root, args) => await Meta.Tag.retrieveMultiple(args.order, args.offset, args.limit),
    },

    articles: {
      type: new GraphQLList(ArticleQueryType),
      args: require('../types/constraint'),
      resolve: async (root, args) => await Meta.Article.retrieveMultiple(args.order, args.offset, args.limit),
    },

    category: {
      type: CategoryQueryType,
      args: require('../types/id'),
      resolve: async (root, args) => await Meta.Category.retrieve(args.id),
    },

    tag: {
      type: TagQueryType,
      args: require('../types/id'),
      resolve: async (root, args) => await Meta.Tag.retrieve(args.id),
    },

    article: {
      type: ArticleQueryType,
      args: require('../types/id'),
      resolve: async (root, args) => await Meta.Article.retrieve(args.id),
    },
  }),
});

export default QueryType;
