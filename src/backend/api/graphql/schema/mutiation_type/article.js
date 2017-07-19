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

    createArticle: {
        type: GraphQLID,
        args: require('../types/article'),
        resolve: async (root, args) => {
            let article = new models.Article(args);
            await article.save();
            return article.get('id').toString();
        }
    },

    updateArticle: {
        type: GraphQLID,
        args: Object.assign({},require('../types/id'),require('../types/article')),
        resolve: async (root, args) => {
            let article = await models.Article.findOne({_id: args._id});
            if (!article) throw Error('Article not Found');
            for (let key in args) {
                if (key !== '_id') article.set(key, args[key]);
            }
            await article.save();
            return article.get('_id').toString();
        }
    },

    deleteArticle: {
        type: GraphQLID,
        args: require('../types/id'),
        resolve: async (root, args) => {
            let article = await models.Article.findOne({_id: args._id});
            if (!article) throw Error('Article not Found');
            await article.remove();
            return article.get('_id').toString();
        }
    }
};