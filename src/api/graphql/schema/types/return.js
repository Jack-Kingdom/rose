import { GraphQLObjectType, GraphQLNonNull, GraphQLBoolean, GraphQLString } from 'graphql'

const MutationReturnType = new GraphQLObjectType({
  name: 'MutationReturnType',
  description: 'return type of every mutation',
  fields: {
    success: {type: new GraphQLNonNull(GraphQLBoolean)},
    msg: {type: GraphQLString}
  }
})

export default MutationReturnType
