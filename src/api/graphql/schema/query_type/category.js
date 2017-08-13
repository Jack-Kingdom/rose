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

import models from "../../../../persistence/models";

let CategoryQueryType = new GraphQLObjectType({
    name: 'Category',
    description: 'Category Info',
    fields: () => {
        let obj = Object.assign({}, require('../types/id'), require('../types/category'));
        obj.articles = {
            type: new GraphQLList(ArticleQueryType),
            args: require('../types/sort-limit'),
            resolve: async (root, args) => await models.Article.find({category: root.id}).sort(args.sort).limit(args.limit)
        };
        return obj;
    }
});

export default CategoryQueryType;