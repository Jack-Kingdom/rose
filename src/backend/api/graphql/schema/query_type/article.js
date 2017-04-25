/**
 * Created by Jack on 4/12/2017.
 */

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

import CategoryQueryType from './category'
import TagQueryType from './tag'

let ArticleQueryType = new GraphQLObjectType({
    name: 'Article',
    description: 'Article type',
    fields: () => {
        return {
            id: {type: GraphQLID},
            title: {type: GraphQLString},
            slug: {type: GraphQLString},
            content: {type: GraphQLString},
            status: {type: GraphQLString},
            createdAt: {type: GraphQLString},
            updatedAt: {type: GraphQLString},
            allowComments: {type: GraphQLBoolean},

            // query_type current article's category todo
            category: {
                type: CategoryQueryType,
                resolve: (root, args) => root.getCategory()
            },

            // query_type current article's all tags
            tags: {
                type: new GraphQLList(TagQueryType),
                resolve: (root, args) => root.getTags()
            }
        }
    }
});

export default ArticleQueryType;