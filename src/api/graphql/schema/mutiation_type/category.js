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
import models from '../../../../persistence/models'

module.exports = {
    createCategory: {
        type: GraphQLString,
        args: require('../types/category'),
        resolve: async (root, args) => {
            let category = new models.Category(args);
            await category.save();
            return category.get('id');
        }
    },

    // todo: remove article's category id
    deleteCategory: {
        type: GraphQLString,
        args: require('../types/id'),
        resolve: async (root, args) => {
            let category = await models.Category.findOne({_id: args.id});
            if (!category) throw Error('category not Found');
            await category.remove();
            return category.get('id');
        }
    },

    updateCategory: {
        type: GraphQLString,
        args: Object.assign({}, require('../types/id'), require('../types/category')),
        resolve: async (root, args) => {
            let category = await models.Category.findOne({_id: args.id});
            if (!category) throw Error('category not Found');
            for (let key in args) {
                if (key !== 'id') category.set(key, args[key]);
            }
            category.increment();
            await category.save();
            return category.get('id');
        }
    },
};