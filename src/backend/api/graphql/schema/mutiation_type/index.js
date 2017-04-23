/**
 * Created by Jack on 4/22/2017.
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
import TagMutationType from './tag'

const MutationType = new GraphQLObjectType({
    name: 'MutationType',
    description: 'root MutationType',
    fields: () => {
        // todo
        return {}.push(TagMutationType).push()
    }
});

export default TagMutationType;