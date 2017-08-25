import express from 'express'
import graphqlHTTP from 'express-graphql'
import config from '../../../config'
import schema from './schema/index'

const graphqlRouter = express.Router()

graphqlRouter.use(graphqlHTTP({
  schema: schema,
  graphiql: config.debug
}))

module.exports = graphqlRouter
