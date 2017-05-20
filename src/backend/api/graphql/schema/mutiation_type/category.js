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
import models from '../../../../persistence/models/index'

module.exports = {
    createCategory: {
        type: GraphQLString,
        args: require('../types/name'),
        resolve: async (root, args) => {
            let category = new models.Category(args);
            await category.save();
            return category.get('_id').toString();
        }
    },
    updateCategory: {
        type: GraphQLString,
        args: Object.assign({},require('../types/id'),require('../types/name')),
        resolve: async (root, args) => {
            let category = await models.Category.findOne({_id: args._id});
            if (!category) throw Error('category not Found');
            category.set('name',args.name);
            await category.save();
            return category.get('_id').toString();
        }
    },
    // todo: remove article's category id
    deleteCategory: {
        type: GraphQLString,
        args:require('../types/id'),
        resolve: async (root, args) => {
            // catch error, cannot convert args.id to ObjectID
            let category = await models.Category.findOne({_id: args.id});
            // catch error, category not found
            if (!category) throw Error('category not Found');

            category.remove(); // update async
            return category.get('_id').toString();
        }
    },
};