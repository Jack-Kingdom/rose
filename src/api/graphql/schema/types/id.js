
import { GraphQLID, GraphQLNonNull } from 'graphql'

module.exports = {
  id: { type: new GraphQLNonNull(GraphQLID) }
}
