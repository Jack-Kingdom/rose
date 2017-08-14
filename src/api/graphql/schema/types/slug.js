
import { GraphQLString, GraphQLNonNull } from 'graphql'

module.exports = {
  slug: { type: new GraphQLNonNull(GraphQLString) }
}
