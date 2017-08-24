import Models from '../persistence/models'

const model = Models.Tag
const fields = Object.keys(Models.Tag.schema.obj)

export default {

  async create (args) {
    if (!(Object.keys(args).every(arg => fields.includes(arg)))) throw new RangeError(`${model.modelName} args illegal`)

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
    if (!(typeof (args) === 'object')) throw new RangeError('args cannot be null')
    if (!(Object.keys(args).every(arg => this.fields.includes(arg)))) throw new RangeError(`${model.modelName} args illegal`)

    const obj = await model.findOne({slug: args.slug})
    if (!obj) throw new RangeError(`${model.modelName} not found`)

    Object.keys(args).forEach((arg) => { obj[arg] = args[arg] })
    await obj.save()
  },

  async retrieve (slug) {
    if (!(typeof (slug) === 'string') && slug.length > 0) throw new RangeError('slug type illegal')

    return model.findOne({slug: slug})
  },

  multipleRetrieve: async (order, offset, limit, conditions = {}) => {
    if (!(typeof (order) === 'string')) throw new RangeError('order type illegal')
    if (!(typeof (offset) === 'number')) throw new RangeError('offset type illegal.')
    if (!(typeof (limit) === 'number')) throw new RangeError('limit type illegal.')
    if (!(Object.keys(conditions).every(arg => this.fields.includes(arg)))) throw new RangeError(`${model.modelName} args illegal`)

    return model.find().sort(order).skip(offset).limit(limit)
  }
}
