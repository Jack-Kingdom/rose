
import { GraphQLInt, GraphQLString } from 'graphql'

module.exports = {
  order: { type: GraphQLString, defaultValue: 'updateAt' },
  offset: { type: GraphQLInt, defaultValue: 0 },
  limit: { type: GraphQLInt, defaultValue: 10 }
}
