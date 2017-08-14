

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
import Meta from '../../../../meta';

// todo: add permission check
module.exports = {

  createArticle: {
    type: GraphQLID,
    args: require('../types/article'),
    resolve: async (root, args) => {
      await Meta.Article.create(args);
    },
  },

  deleteArticle: {
    type: GraphQLID,
    args: require('../types/id'),
    resolve: async (root, args) => {
      await Meta.Article.delete(args.id);
    },
  },

  updateArticle: {
    type: GraphQLID,
    args: Object.assign({}, require('../types/id'), require('../types/article')),
    resolve: async (root, args) => {
      const id = args.id;
      delete args.id;
      await Meta.Article.update(id, args);
    },
  },
};
