/**
 * Created by Jack on 4/13/2017.
 */

import express from 'express'
import graphqlRouter from './graphql'

let router = express.Router();

router.use(graphqlRouter);

export default router;