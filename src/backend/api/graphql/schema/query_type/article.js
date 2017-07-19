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

import CategoryQueryType from './category'
import TagQueryType from './tag'

let ArticleQueryType = new GraphQLObjectType({
    name: 'Article',
    description: 'Article type',
    fields: () => {
        let obj = Object.assign({}, require('../types/id'), require('../types/article'));
        obj.category={
            type: CategoryQueryType,
            resolve: (root, args) => root.getCategory()
        };
        obj.tags={
            type: new GraphQLList(TagQueryType),
            resolve: (root, args) => root.getTags()
        };
        return obj;
    }
});

export default ArticleQueryType;