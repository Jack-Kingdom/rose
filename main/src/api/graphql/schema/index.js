
import { GraphQLSchema } from 'graphql'
import QueryType from './query_type/index'
import MutationType from './mutiation_type/index'

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
})

export default schema
