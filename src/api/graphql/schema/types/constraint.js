

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

module.exports = {
  order: { type: GraphQLString, defaultValue: 'updateAt' },
  offset: { type: GraphQLInt, defaultValue: 0 },
  limit: { type: GraphQLInt, defaultValue: 10 },
};
