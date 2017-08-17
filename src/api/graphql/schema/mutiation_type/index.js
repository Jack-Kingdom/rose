import { GraphQLObjectType } from 'graphql'

// todo: add permition check
const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  description: 'all database mutation here',
  fields: Object.assign({}, require('./article'), require('./category'), require('./tag'))
})
export default MutationType
