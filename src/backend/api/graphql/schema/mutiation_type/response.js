/**
 * Created by Jack on 4/23/2017.
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

const MutationResponseType = new GraphQLObjectType({
    name: 'MutationResponseType',
    description: 'Mutation Response Type',
    fields: () => {
        return {
            success: {type: GraphQLBoolean},
            message: {type: GraphQLString},
        }
    }
});

export default MutationResponseType;