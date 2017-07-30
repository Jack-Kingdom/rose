"use strict";

import express from 'express';
import graphqlHTTP from 'express-graphql';
import config from '../../config';
import schema from './schema/index';

const graphqlRouter = express.Router();

graphqlRouter.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: config.debug,
}));

export default graphqlRouter;