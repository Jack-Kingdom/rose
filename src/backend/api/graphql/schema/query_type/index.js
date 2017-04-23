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
import models from '../../../../persistence/models';


let QueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'RootQueryType',
    fields: () => {
        return {
            categories: {
                type: new GraphQLList(CategoryQueryType),
                args: {
                    limit: {type: GraphQLInt,},
                    sort: {type: GraphQLString,}
                },
                resolve: (root, args) => models.Category.find().limit(args.limit).sort(args.sort)
            },

            tags: {
                type: new GraphQLList(TagQueryType),
                args: {
                    limit: {type: GraphQLInt,},
                    sort: {type: GraphQLString,}
                },
                resolve: (root, args) => models.Tag.find().limit(args.limit).sort(args.sort)
            },

            articles: {
                type: new GraphQLList(ArticleQueryType),
                args: {
                    limit: {type: GraphQLInt,},
                    sort: {type: GraphQLString,}
                },
                resolve: (root, args) => models.Article.find().limit(args.limit).sort(args.sort)
            },

            category: {
                type: CategoryQueryType,
                args: {
                    id: {type: new GraphQLNonNull(GraphQLID),}
                },
                resolve: (root, args) => models.Category.findOne({_id: args.id})
            },

            tag: {
                type: TagQueryType,
                args: {
                    id: {type: new GraphQLNonNull(GraphQLID),}
                },
                resolve: (root, args) => models.Tag.findOne({_id: args.id})
            },

            article: {
                type: ArticleQueryType,
                args: {
                    id: {type: new GraphQLNonNull(GraphQLID),}
                },
                resolve: (root, args) => models.Article.findOne({_id: args.id})
            }
        }
    }
});

export default QueryType;