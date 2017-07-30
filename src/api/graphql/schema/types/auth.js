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

module.exports = {
    email: {type: new GraphQLNonNull(GraphQLString)},
    password: {type: new GraphQLNonNull(GraphQLString)}
};