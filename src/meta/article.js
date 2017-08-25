import Models from '../persistence/models'

const model = Models.Article
const fields = Object.keys(Models.Article.schema.obj)

export default {

  async create (args) {
    if (!(Object.keys(args).every(arg => fields.includes(arg)))) throw new TypeError(`${model.modelName} args illegal`)

    const obj = new model(args)
    await obj.save()
  },

  async remove (slug) {
    if (!(typeof (slug) === 'string') && slug.length > 0) throw new RangeError('slug illegal')

    const obj = await model.findOne({slug: slug})
    if (!obj) throw Error(`${model.modelName} not Found`)
    await obj.remove()
  },

  async update (args) {
    if (!(typeof (args) === 'object')) throw new TypeError('args cannot be null')
    if (!(Object.keys(args).every(arg => this.fields.includes(arg)))) throw new TypeError(`${model.modelName} args illegal`)

    const obj = await model.findOne({slug: args.slug})
    if (!obj) throw new RangeError(`${model.modelName} not found`)

    Object.keys(args).forEach((arg) => { obj[arg] = args[arg] })
    await obj.save()
  },

  retrieve (slug) {
    if (!(typeof (slug) === 'string') && slug.length > 0) throw new RangeError('slug type illegal')

    return model.findOne({slug: slug})
  },

  multipleRetrieve (order, offset, limit, conditions = {}) {
    if (!(typeof (order) === 'string')) throw new TypeError('order type illegal')
    if (!(typeof (offset) === 'number')) throw new TypeError('offset type illegal.')
    if (!(typeof (limit) === 'number')) throw new TypeError('limit type illegal.')
    if (!(Object.keys(conditions).every(arg => fields.includes(arg)))) throw new TypeError(`${model.modelName} args illegal`)

    return model.find(conditions).sort(order).skip(offset).limit(limit)
  }
}
