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

const CategoryMutationType = new GraphQLObjectType({
    name: 'CategoryMutationType',
    fields: {
        createCategory: {
            type: MutationResponseType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString),}
            },
            resolve: async (root, args) => {
                let category = null;
                try {
                    category = new models.Category({name: args.name,});
                } catch (error) {
                    return {
                        success: false,
                        message: error.message,
                    }
                }

                // success return
                category.save();
                return {
                    success: true,
                    message: category._id,
                };
            }
        },
        updateCategory: {
            type: MutationResponseType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLID),},
                name: {type: new GraphQLNonNull(GraphQLString),}
            },
            resolve: async (root, args) => {
                let category = null;
                try {
                    // catch error, cannot convert args.id to ObjectID
                    category = await models.Category.findOne({_id: args.id});
                    // catch error, tag not found
                    if (!category) throw Error('Tag not Found');
                } catch (error) {
                    return {
                        success: false,
                        message: error.message,
                    }
                }
                // success found, update data
                category.name = args.name;
                category.increment();    // increment version
                category.save(); // update async
                return {
                    success: true,
                    message: args.id,
                }
            }
        },
        deleteCategory: {
            type: MutationResponseType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLID),},
            },
            resolve: async (root, args) => {
                let category = null;
                try {
                    // catch error, cannot convert args.id to ObjectID
                    category = await models.Category.findOne({_id: args.id});
                    // catch error, tag not found
                    if (!category) throw Error('Tag not Found');
                } catch (error) {
                    return {
                        success: false,
                        message: error.message,
                    }
                }

                // success found, remove it
                category.remove(); // update async
                return {
                    success: true,
                    message: args.id,
                }
            }
        }
    }
});

export default CategoryMutationType;