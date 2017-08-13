"use strict";

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


let QueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'RootQueryType',
    fields: () => {
        return {
            categories: {
                type: new GraphQLList(CategoryQueryType),
                args: require('../types/constraint'),
                resolve: async (root, args) => await Meta.Category.queryMultiCategory(args.order,args.offset,args.limit)
            },

            tags: {
                type: new GraphQLList(TagQueryType),
                args: require('../types/constraint'),
                resolve: async (root, args) => await Meta.Tag.queryMultiTag(args.order,args.offset,args.type)
            },

            articles: {
                type: new GraphQLList(ArticleQueryType),
                args: require('../types/constraint'),
                resolve: async (root, args) => await Meta.Article.queryMultiArticle(args.order, args.offset, args.limit)
            },

            category: {
                type: CategoryQueryType,
                args: require('../types/id'),
                resolve: async (root, args) => await Meta.Category.queryCategory(args.id)
            },

            tag: {
                type: TagQueryType,
                args: require('../types/id'),
                resolve: async (root, args) => await Meta.Tag.queryTag(args.id)
            },

            article: {
                type: ArticleQueryType,
                args: require('../types/id'),
                resolve: async (root, args) => await Meta.Article.queryArticle(args.id)
            }
        };
    }
});

export default QueryType;