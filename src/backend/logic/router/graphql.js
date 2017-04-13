/**
 * Created by Jack on 4/13/2017.
 */

import express from 'express'
import graphqlHTTP from 'express-graphql'
import config from '../../config'
import schema from '../../api/graphql/schema'

let graphqlRouter = express.Router();

graphqlRouter.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: config.debug
}));

export default graphqlRouter;