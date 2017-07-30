import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLEnumType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
} from 'graphql';
import models from '../../../../persistence/models';
import Auth from '../../../../logic/auth';
import logger from '../../../../logic/logger'

module.exports = {
    register: {
        type: GraphQLString,
        args: require('../types/auth'),
        resolve: async (root, args) => {
            console.log(root);
            logger.info(JSON.stringify({event: 'register', timestamp: Date.now(), args: args}));
            if (Auth.register(args.email, args.password)) logger.info(Date.now(), `${args.email} register success`);
            else logger.info(Date.now(), `${args.email} register fails`)
        }
    },

    login: {
        type: GraphQLString,
        args: require('../types/auth'),
        resolve: async (root, args) => {

        }
    }
};