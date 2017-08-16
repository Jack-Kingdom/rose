import { GraphQLString, GraphQLBoolean, GraphQLNonNull } from 'graphql'

module.exports = {
  success: {type: new GraphQLNonNull(GraphQLBoolean)},
  msg: {type: GraphQLString}
}
