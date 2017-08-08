/**
 * Created by Jack on 4/25/2017.
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

module.exports = {
    title: {type: GraphQLString},
    slug: {type: GraphQLString},
    content: {type: GraphQLString},
    renderedContent: {type: GraphQLString},
    category: {type: GraphQLID},
    tags: {type: new GraphQLList(GraphQLID)},
    status: {type: GraphQLString},
    allowComments: {type: GraphQLBoolean},
    createdAt: {type: GraphQLInt},
    updatedAt: {type: GraphQLInt},
};