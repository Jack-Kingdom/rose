import { GraphQLID, GraphQLString } from 'graphql'
import Meta from '../../../../meta'

module.exports = {
  createTag: {
    type: GraphQLString,
    args: require('../types/tag'),
    resolve: async (parent, args, req) => Meta.Tag.create(args)
  },

  // todo: remove article's tag id
  deleteTag: {
    type: GraphQLString,
    args: require('../types/id'),
    resolve: async (parent, args, req) => Meta.Tag.delete(args.id)
  },

  updateTag: {
    type: GraphQLID,
    args: Object.assign({}, require('../types/id'), require('../types/tag')),
    resolve: async (parent, args, req) => {
      const id = args.id
      delete args.id
      return Meta.Tag.update(id, args)
    }
  }
}
