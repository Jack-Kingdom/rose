import { GraphQLID, GraphQLInt, GraphQLBoolean, GraphQLString, GraphQLList } from 'graphql'

module.exports = {
  slug: {type: GraphQLString},
  title: {type: GraphQLString},
  content: {type: GraphQLString},
  renderedContent: {type: GraphQLString},
  category: {type: GraphQLID},
  tags: {type: new GraphQLList(GraphQLID)},
  status: {type: GraphQLString},
  allowComments: {type: GraphQLBoolean},
  createdAt: {type: GraphQLInt},
  updatedAt: {type: GraphQLInt}
}
