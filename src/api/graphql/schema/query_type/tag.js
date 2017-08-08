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
import models from "../../../../persistence/models";

const TagQueryType = new GraphQLObjectType({
    name: 'Tag',
    description: 'Tag Info',
    fields: () => {
        let obj = Object.assign({}, require('../types/id'), require('../types/tag'));
        obj.articles = {
            type: new GraphQLList(ArticleQueryType),
            args: require('../types/sort-limit'),
            resolve: async (root, args) => await models.Article.find({tags: {'$all': [root.id]}})
        };
        return obj;
    }
});

export default TagQueryType;