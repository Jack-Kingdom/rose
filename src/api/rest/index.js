import express from 'express'
import restfulV1 from './v1'

const restRouter = express.Router()

restRouter.use('/v1', restfulV1)

export default restRouter
