import Ops from '../../../../../ops'

export default {
  createArticle: async ({params}, req, node) => Ops.Article.create(req, params),
  updateArticle: async ({params}, req, node) => Ops.Article.update(req, params),
  deleteArticle: async ({params}, req, node) => Ops.Article.delete(req, params),

  createTag: async ({params}, req, node) => Ops.Tag.create(req, params),
  updateTag: async ({params}, req, node) => Ops.Tag.update(req, params),
  deleteTag: async ({params}, req, node) => Ops.Tag.delete(req, params),
}