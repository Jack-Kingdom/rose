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

// todo: add permission check
module.exports = {

    createArticle: {
        type: GraphQLID,
        args: require('../types/article'),
        resolve: async (root, args) => {
            let article = new models.Article(args);
            await article.save();
            return article.get('id');
        }
    },

    deleteArticle: {
        type: GraphQLID,
        args: require('../types/id'),
        resolve: async (root, args) => {
            let article = await models.Article.findOne({_id: args.id});
            if (!article) throw Error('Article not Found');
            await article.remove();
            return article.get('id');
        }
    },

    updateArticle: {
        type: GraphQLID,
        args: Object.assign({}, require('../types/id'), require('../types/article')),
        resolve: async (root, args) => {
            let article = await models.Article.findOne({_id: args.id});
            if (!article) throw Error('Article not Found');
            for (let key in args) {
                if (key !== 'id') article.set(key, args[key]);
            }
            article.increment();
            await article.save();
            return article.get('id');
        }
    },
};