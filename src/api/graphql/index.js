import express from 'express'
import graphqlV1 from './v1'

const graphqlRouter = express.Router()

graphqlRouter.use('/v1', graphqlV1)

module.exports = graphqlRouter
