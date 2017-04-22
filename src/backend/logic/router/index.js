/**
 * Created by Jack on 4/13/2017.
 */

import express from 'express'
import graphqlHTTP from 'express-graphql'
import staticRouter from './static'
import graphqlRouter from './graphql'

let router = express.Router();

router.use(graphqlRouter);

// make sure this route is at last
router.use(staticRouter);

export default router;