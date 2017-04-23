/**
 * Created by Jack on 4/22/2017.
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

import models from '../../../../persistence/models'
import MutationResponseType from './response'

const TagMutationType = new GraphQLObjectType({
    name: 'TagMutationType',
    fields: () => {
        return {
            addTag: {
                type: MutationResponseType,
                args: {
                    name: {
                        type: new GraphQLNonNull(GraphQLString),
                    }
                },
                resolve: async (root, args) => {
                    let newTag = new models.Tag({name: args.name,});
                    await newTag.save();
                    return {
                        success: true,
                        message: null,
                    };
                }
            }
        }
    }
});

export default TagMutationType;