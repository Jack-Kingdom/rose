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
        return {
            _id: {type: GraphQLID},
            name: {type: GraphQLString},
            created_at:{type:GraphQLString},

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

export default TagQueryType;