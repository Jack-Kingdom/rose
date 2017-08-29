import Models from '../persistence/models'

const Model = Models.Article
const fields = Object.keys(Models.Article.schema.obj)

export default {

  async create (args) {
    if (!(Object.keys(args).every(arg => fields.includes(arg)))) throw new TypeError(`${Model.modelName} args illegal`)

    const obj = new Model(args)
    await obj.save()
    return obj.toJSON()
  },

  async remove (slug) {
    if (!(typeof (slug) === 'string') && slug.length > 0) throw new RangeError(`slug ${slug} illegal.`)

    const obj = await Model.findOne({slug: slug})
    if (!obj) throw Error(`${Model.modelName} not Found`)
    await obj.remove()
    return obj.toJSON()
  },

  async update (slug, args) {
    if (!(typeof (slug) === 'string' && slug.length > 0)) throw new TypeError(`slug ${slug} illegal.`)
    if (!(typeof (args) === 'object')) throw new TypeError('args cannot be null')
    if (!(Object.keys(args).every(arg => this.fields.includes(arg)))) throw new TypeError(`${Model.modelName} args illegal`)

    const obj = await Model.findOne({slug: slug})
    if (!obj) throw new RangeError(`${Model.modelName} not found`)

    Object.keys(args).forEach((arg) => { obj[arg] = args[arg] })
    await obj.save()
    return obj.toJSON()
  },

  async retrieve (slug) {
    if (!(typeof (slug) === 'string') && slug.length > 0) throw new RangeError(`slug ${slug} illegal.`)

    const article = await Model.findOne({slug: slug})
    return article.toJSON()
  },

  async multipleRetrieve (order, offset, limit, conditions = {}) {
    if (!(typeof (order) === 'string')) throw new TypeError('order type illegal')
    if (!(typeof (offset) === 'number')) throw new TypeError('offset type illegal.')
    if (!(typeof (limit) === 'number')) throw new TypeError('limit type illegal.')
    if (!(Object.keys(conditions).every(arg => fields.includes(arg)))) throw new TypeError(`${Model.modelName} args illegal`)

    const articles = await Model.find(conditions).sort(order).skip(offset).limit(limit)
    return articles.toJSON()
  }
}
