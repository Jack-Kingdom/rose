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
    limit: {type: GraphQLInt,},
    sort: {type: GraphQLString,},
    order: {
        type: new GraphQLEnumType({
            name: 'order',
            values: {
                ascending: {value: 1},
                descending: {value: -1},
            }
        })
    }
};