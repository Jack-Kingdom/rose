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
    status: {type: GraphQLString},
    allowComments: {type: GraphQLBoolean},
};