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

// todo notice here, modified very mass

const ArticleMutationType = new GraphQLObjectType({
    name: 'ArticleMutationType',
    fields: {
        createArticle: {
            type: MutationResponseType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString),}
            },
            resolve: async (root, args) => {
                let category = null;
                try {
                    category = new models.Article({name: args.name,});
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
        updateArticle: {
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
        deleteArticle: {
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

export default ArticleMutationType;