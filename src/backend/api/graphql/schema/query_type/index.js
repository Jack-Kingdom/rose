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

import ArticleType from './article'
import CategoryType from './category'
import TagType from './tag'
import models from '../../../../persistence/models'


let QueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'RootQueryType',
    fields: () => {
        return {
            categories: {
                type: new GraphQLList(CategoryType),
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
                type: new GraphQLList(TagType),
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
                type: new GraphQLList(ArticleType),
                args: {
                    limit: {
                        type: GraphQLInt,
                    },
                    orderBy: {
                        type: GraphQLString,
                    }
                },
                resolve: (root, args) => models.Article.findAll({
                    where: {},
                    limit: args.limit,
                    orderBy: args.orderBy,
                })
            },

            category: {
                type: CategoryType,
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLID),
                    }
                },
                resolve: (root, args) => models.Category.find({where: {id: args.id}})
            },

            tag: {
                type: TagType,
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLID),
                    }
                },
                resolve: (root, args) => models.Tag.find({where: {id: args.id}})
            },
            article: {
                type: ArticleType,
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