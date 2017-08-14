

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
import ArticleQueryType from './article';
import Meta from '../../../../meta';


const CategoryQueryType = new GraphQLObjectType({
  name: 'Category',
  description: 'Category Info',
  fields: () => {
    const obj = Object.assign({}, require('../types/id'), require('../types/category'));
    obj.articles = {
      type: new GraphQLList(ArticleQueryType),
      args: require('../types/sort-limit'),
      resolve: async (root, args) => await Meta.Article.retrieveMultiple(args.order, args.offset, args.limit, { category: root.id }),
    };
    return obj;
  },
});

export default CategoryQueryType;
