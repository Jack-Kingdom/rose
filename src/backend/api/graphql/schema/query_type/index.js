/**
 * Created by Jack on 4/12/2017.
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

import ArticleQueryType from './article'
import CategoryQueryType from './category'
import TagQueryType from './tag'
import models from '../../../../persistence/models/index';


let QueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'RootQueryType',
    fields: () => {
        return {
            categories: {
                type: new GraphQLList(CategoryQueryType),
                args: require('../types/order-limit'),
                resolve: async (root, args) => {
                    let categories = await models.Category.sort(args.sort,args.order).limit(args.limit).find();
                    return categories.map(tag => tag.get());
                }
            },

            tags: {
                type: new GraphQLList(TagQueryType),
                args: require('../types/order-limit'),
                resolve: async (root, args) => {
                    let tags = await models.Tag.sort(args.sort,args.order).limit(args.limit).find();
                    return tags.map(tag => tag.get());
                }
            },

            articles: {
                type: new GraphQLList(ArticleQueryType),
                args: require('../types/order-limit'),
                resolve: async (root, args) => {
                    let articles = await models.Article.find().sort([[args.sort,args.order]]).limit(args.limit);
                    return articles;
                    // return articles.map(tag => tag.get());
                }
            },

            category: {
                type: CategoryQueryType,
                args: require('../types/id'),
                resolve: (root, args) => models.Category.findOne(args)
            },

            tag: {
                type: TagQueryType,
                args: require('../types/id'),
                resolve: (root, args) => models.Tag.findOne({args})
            },

            article: {
                type: ArticleQueryType,
                args: require('../types/id'),
                resolve: (root, args) => models.Article.findOne({args})
            }
        }
    }
});

export default QueryType;