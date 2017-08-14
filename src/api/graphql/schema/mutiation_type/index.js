

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

// todo: add permition check
const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  description: 'root MutationType',
  fields: Object.assign({}, require('./article'), require('./category'), require('./tag')),
});
export default MutationType;
