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
        args: require('../types/name'),
        resolve: async (root, args) => {
            let tag = new models.Tag(args);
            await tag.save();
            return tag.get('_id').toString();
        }
    },
    updateTag: {
        type: GraphQLID,
        args: Object.assign({},require('../types/id'),require('../types/name')),
        resolve: async (root, args) => {
            let tag = await models.Tag.findOne({_id: args._id});
            if (!tag) throw Error('Tag not Found');
            tag.set('name',tag.name);
            await tag.save();
            return tag.get('_id').toString();
        }
    },
    // todo: remove article's tag id
    deleteTag: {
        type: GraphQLString,
        args:require('../types/id'),
        resolve: async (root, args) => {
            let tag = await models.Tag.findOne({_id: args.id});
            if (!tag) throw Error('Tag not Found');
            await tag.remove();
            return tag.get('_id').toString();
        }
    },
};