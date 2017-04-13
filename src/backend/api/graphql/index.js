/**
 * Created by Jack on 4/12/2017.
 */

import express from 'express'
import graphqlHTTP from 'express-graphql'
import path from 'path'
import config from '../../config'
import schema from './schema'

let router = express.Router();

router.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: config.debug
}));

export default router;