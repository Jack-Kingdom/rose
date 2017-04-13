/**
 * Created by Jack on 4/13/2017.
 */

import express from 'express'
import graphqlHTTP from 'express-graphql'
import staticRouter from './static'
import graphqlRouter from './graphql'

let router = express.Router();

router.use(staticRouter);

router.use(graphqlRouter);

export default router;