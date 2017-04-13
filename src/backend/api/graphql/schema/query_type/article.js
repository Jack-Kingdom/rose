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

import CategoryType from './category'
import TagType from './tag'

let ArticleType = new GraphQLObjectType({
    name: 'Article',
    description: 'Article type',
    fields: () => {
        return {
            id: {type: GraphQLID},
            uuid: {type: GraphQLString},
            title: {type: GraphQLString},
            url: {type: GraphQLString},
            content: {type: GraphQLString},
            status: {type: GraphQLString},
            meta_title: {type: GraphQLString},
            meta_description: {type: GraphQLString},
            created_at: {type: GraphQLString},
            updated_at: {type: GraphQLString},
            comment_support:{type:GraphQLBoolean},

            // query_type current article's category
            category: {
                type: CategoryType,
                resolve: (root, args) => root.getCategory()
            },

            // query_type current article's all tags
            tags: {
                type: new GraphQLList(TagType),
                resolve: (root, args) => root.getTags()
            }
        }
    }
});

export default ArticleType;