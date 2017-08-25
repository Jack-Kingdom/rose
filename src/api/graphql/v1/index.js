import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'
import config from '../../../../config/index'

const graphqlV1 = express.Router()

graphqlV1.use(graphqlHTTP({
  schema: schema,
  rootValue: {},
  graphiql: config.debug
}))

export default graphqlV1
