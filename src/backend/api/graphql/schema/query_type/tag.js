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

let TagType = new GraphQLObjectType({
    name: 'Tag',
    description: 'Tag Info',
    fields: () => {
        return {
            id: {type: GraphQLInt},
            uuid: {type: GraphQLString},
            name: {type: GraphQLString},

            //articles of current category
            articles: {
                type: new GraphQLList(ArticleType),
                resolve: (root, args) => root.getArticles()
            }
        }
    }
});

export default TagType;