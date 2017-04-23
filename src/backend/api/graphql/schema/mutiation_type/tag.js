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

// todo Permission check

const TagMutationType = new GraphQLObjectType({
    name: 'CategoryMutationType',
    fields: {
        createTag: {
            type: MutationResponseType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString),}
            },
            resolve: async (root, args) => {
                let tag = null;
                try {
                    tag = new models.Tag({name: args.name,});
                } catch (error) {
                    return {
                        success: false,
                        message: error.message,
                    }
                }

                // success return
                tag.save();
                return {
                    success: true,
                    message: tag._id,
                };
            }
        },
        updateTag: {
            type: MutationResponseType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLID),},
                name: {type: new GraphQLNonNull(GraphQLString),}
            },
            resolve: async (root, args) => {
                let tag = null;
                try {
                    // catch error, cannot convert args.id to ObjectID
                    tag = await models.Tag.findOne({_id: args.id});
                    // catch error, tag not found
                    if (!tag) throw Error('Tag not Found');
                } catch (error) {
                    return {
                        success: false,
                        message: error.message,
                    }
                }
                // success found, update data
                tag.name = args.name;
                tag.increment();    // increment version
                tag.save(); // update async
                return {
                    success: true,
                    message: args.id,
                }
            }
        },
        deleteTag: {
            type: MutationResponseType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLID),},
            },
            resolve: async (root, args) => {
                let tag = null;
                try {
                    // catch error, cannot convert args.id to ObjectID
                    tag = await models.Tag.findOne({_id: args.id});
                    // catch error, tag not found
                    if (!tag) throw Error('Tag not Found');
                } catch (error) {
                    return {
                        success: false,
                        message: error.message,
                    }
                }

                // success found, remove it
                tag.remove(); // update async
                return {
                    success: true,
                    message: args.id,
                }
            }
        }
    }
});

export default TagMutationType;