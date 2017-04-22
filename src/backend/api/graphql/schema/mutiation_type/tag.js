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

const TagMutationType = new GraphQLObjectType({
    name: 'TagMutationType',
    fields: () => {
        return {
            addTag: {
                type: GraphQLString,
                args: {
                    name: {
                        type: new GraphQLNonNull(GraphQLString),
                    }
                },
                resolve: async (root, args) => {
                    let newTag = null;
                    try {
                        newTag = new models.Tag({
                            name: args.name,
                        });
                        await newTag.save();
                    } catch (error) {
                        return error.message;
                    }
                    return 'success';
                }
            }
        }
    }
});

export default TagMutationType;