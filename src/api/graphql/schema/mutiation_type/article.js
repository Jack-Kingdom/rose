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
import Meta from '../../../../meta';

// todo: add permission check
module.exports = {

    createArticle: {
        type: GraphQLID,
        args: require('../types/article'),
        resolve: async (root, args) => {
            await Meta.Article.createArticle(args);
        }
    },

    deleteArticle: {
        type: GraphQLID,
        args: require('../types/id'),
        resolve: async (root, args) => {
            await Meta.Article.deleteArticle(args.id);
        }
    },

    updateArticle: {
        type: GraphQLID,
        args: Object.assign({}, require('../types/id'), require('../types/article')),
        resolve: async (root, args) => {
            const id = args.id;
            delete args.id;
            console.log(args);
            await Meta.Article.updateArticle(id, args);
        }
    },
};