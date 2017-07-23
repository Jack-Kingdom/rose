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
    createTag: {
        type: GraphQLString,
        args: require('../types/tag'),
        resolve: async (root, args) => {
            let tag = new models.Tag(args);
            await tag.save();
            return tag.get('id');
        }
    },

    // todo: remove article's tag id
    deleteTag: {
        type: GraphQLString,
        args: require('../types/id'),
        resolve: async (root, args) => {
            let tag = await models.Tag.findOne({_id: args.id});
            if (!tag) throw Error('Tag not Found');
            await tag.remove();
            return tag.get('id');
        }
    },

    updateTag: {
        type: GraphQLID,
        args: Object.assign({}, require('../types/id'), require('../types/tag')),
        resolve: async (root, args) => {
            let tag = await models.Tag.findOne({_id: args.id});
            if (!tag) throw Error('Tag not Found');
            for (let key in args) {
                if (key !== 'id') tag.set(key, args[key]);
            }
            tag.increment();
            await tag.save();
            return tag.get('id');
        }
    },
};