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
        let obj = Object.assign({}, require('../types/id'), require('../types/category'));
        obj.articles = {
            type: new GraphQLList(ArticleQueryType),
            resolve: (root, args) => root.getTags()
        };
        return obj;
    }
});

export default CategoryQueryType;