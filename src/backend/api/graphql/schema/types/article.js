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
    title: {type: new GraphQLNonNull(GraphQLString)},
    slug: {type: new GraphQLNonNull(GraphQLString)},
    content: {type: GraphQLString},
    renderedContent: {type: GraphQLString},
    status: {type: GraphQLString},
    allowComments: {type: GraphQLBoolean},
    createdAt: {type: GraphQLInt},
    updatedAt: {type: GraphQLInt},
};