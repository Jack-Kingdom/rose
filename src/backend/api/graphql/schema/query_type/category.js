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

let CategoryQueryType = new GraphQLObjectType({
    name: 'Category',
    description: 'Category Info',
    fields: () => {
        return {
            id: {type: GraphQLInt},
            name: {type: GraphQLString},

            //articles of current category
            articles: {
                type: new GraphQLList(ArticleQueryType),
                resolve: (root, args) => root.getArticles()
            }
        }
    }
});

export default CategoryQueryType;