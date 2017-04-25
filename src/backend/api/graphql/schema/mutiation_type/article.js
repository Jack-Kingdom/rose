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
        args: {
            title: {type: new GraphQLNonNull(GraphQLString)},
            slug: {type: new GraphQLNonNull(GraphQLString)},
            content: {type: GraphQLString},
            status: {type: GraphQLString},
            createdAt: {type: GraphQLString},
            updatedAt: {type: GraphQLString},
            allowComments: {type: GraphQLBoolean},
        },
        resolve: async (root, args) => {
            let article = new models.Article(args);
            await article.save();
            return article.id;
        }
    },

    updateArticle: {
        type: GraphQLID,
        args: {
            _id: {type: new GraphQLNonNull(GraphQLID),},
            title: {type: GraphQLString},
            slug: {type: GraphQLString},
            content: {type: GraphQLString},
            status: {type: GraphQLString},
            createdAt: {type: GraphQLString},
            updatedAt: {type: GraphQLString},
            allowComments: {type: GraphQLBoolean},
        },
        resolve: async (root, args) => {
            let article = await models.Article.findOne({_id: args._id});
            if (!article) throw Error('Article not Found');
            article.set(args);
            // todo: mongoose problem, no check here
            await article.save();
            return article.get('_id').toString();
        }
    },

    deleteArticle:{
        type:GraphQLID,
        args:require('../types/id'),
        resolve: async (root, args) => {
            let article = await models.Article.findOne({_id: args.id});
            await article.remove();
            return article.id;
        }
    }
};