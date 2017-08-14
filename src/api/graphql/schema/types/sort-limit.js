

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
  sort: { type: GraphQLString },
  limit: { type: GraphQLInt },
};
