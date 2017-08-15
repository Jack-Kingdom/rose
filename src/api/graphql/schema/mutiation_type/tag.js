import { GraphQLID, GraphQLString } from 'graphql'
import Meta from '../../../../meta'

module.exports = {
  createTag: {
    type: GraphQLString,
    args: require('../types/tag'),
    resolve: async (root, args) => Meta.Tag.create(args)
  },

  // todo: remove article's tag id
  deleteTag: {
    type: GraphQLString,
    args: require('../types/id'),
    resolve: async (root, args) => Meta.Tag.delete(args.id)
  },

  updateTag: {
    type: GraphQLID,
    args: Object.assign({}, require('../types/id'), require('../types/tag')),
    resolve: async (root, args) => {
      const id = args.id
      delete args.id
      return Meta.Tag.update(id, args)
    }
  }
}
