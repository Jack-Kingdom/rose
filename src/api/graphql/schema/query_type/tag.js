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
import Meta from '../../../../meta';

const TagQueryType = new GraphQLObjectType({
    name: 'Tag',
    description: 'Tag Info',
    fields: () => {
        let obj = Object.assign({}, require('../types/id'), require('../types/tag'));
        obj.articles = {
            type: new GraphQLList(ArticleQueryType),
            args: require('../types/constraint'),
            resolve: async (root, args) => await Meta.Article.retrieveMultiple(args.order, args.offset, args.limit, {tags: {'$all': [root.id]}})
        };
        return obj;
    }
});

export default TagQueryType;