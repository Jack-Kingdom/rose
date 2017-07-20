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

let TagQueryType = new GraphQLObjectType({
    name: 'Tag',
    description: 'Tag Info',
    fields: () => {
        let obj = Object.assign({}, require('../types/id'), require('../types/tag'));
        obj.articles={
            type: new GraphQLList(ArticleQueryType),
            resolve: (root, args) => root.getTags()
        };
        return obj;
    }
});

export default TagQueryType;