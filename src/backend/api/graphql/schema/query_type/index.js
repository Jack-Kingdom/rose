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
                    limit: {
                        type: GraphQLInt,
                    },
                    orderBy: {
                        type: GraphQLString,
                    }
                },
                resolve: (root, args) => models.Category.findAll({
                    where: {},
                    limit: args.limit,
                    orderBy: args.orderBy,
                })
            },

            tags: {
                type: new GraphQLList(TagQueryType),
                args: {
                    limit: {
                        type: GraphQLInt,
                    },
                    orderBy: {
                        type: GraphQLString,
                    }
                },
                resolve: (root, args) => models.Tag.findAll({
                    where: {},
                    limit: args.limit,
                    orderBy: args.orderBy,
                })
            },

            articles: {
                type: new GraphQLList(ArticleQueryType),
                args: {
                    limit: {
                        type: GraphQLInt,
                    },
                    orderBy: {
                        type: GraphQLString,
                    }
                },
                resolve: (root, args) => models.Article.find({
                    where: {},
                    limit: args.limit,
                    orderBy: args.orderBy,
                })
            },

            category: {
                type: CategoryQueryType,
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLID),
                    }
                },
                resolve: (root, args) => models.Category.find({where: {id: args.id}})
            },

            tag: {
                type: TagQueryType,
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLID),
                    }
                },
                resolve: (root, args) => models.Tag.find({where: {id: args.id}})
            },
            article: {
                type: ArticleQueryType,
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLID),
                    }
                },
                resolve: (root, args) => models.Article.find({where: {id: args.id}})
            }
        }
    }
});

export default QueryType;