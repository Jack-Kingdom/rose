import { GraphQLSchema } from 'graphql'
import QueryType from './query/index'
import MutationType from './mutiation/index'

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
})

export default schema
