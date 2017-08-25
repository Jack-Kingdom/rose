import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema/index'
import rootValue from './root/index'
import config from '../../../../config'

const graphqlV1 = express.Router()

graphqlV1.use(graphqlHTTP({
  schema: schema,
  rootValue: rootValue,
  graphiql: config.debug
}))

export default graphqlV1
