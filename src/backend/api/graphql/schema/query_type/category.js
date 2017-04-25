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
            _id: {type: GraphQLInt},
            name: {type: GraphQLString},

            //articles of current category todo
            articles: {
                type: new GraphQLList(ArticleQueryType),
                args: {
                    limit: {type: GraphQLInt,},
                    sort: {type: GraphQLString,}
                },
                resolve: (root, args) => root.getArticles()
            }
        }
    }
});

export default CategoryQueryType;