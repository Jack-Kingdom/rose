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

import QueryType from './query_type'
import MutationType from './mutiation_type'

let schema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
});

export default schema;