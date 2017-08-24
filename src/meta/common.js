class Common {
  constructor (model) {
    this.Model = model
    this.modelName = model.modelName
    this.fields = Object.keys(this.Model.schema.obj)
  }

  async create (args) {
    if (!(Object.keys(args).every(arg => this.fields.includes(arg)))) throw new RangeError(`${this.modelName} args illegal`)

    const obj = new this.Model(args)
    await obj.save()
  }

  async remove (id) {
    if (!(typeof (id) === 'string') && id.length > 0) throw new RangeError('id illegal')

    const obj = await this.Model.findOne({_id: id})
    if (!obj) throw Error(`${this.modelName} not Found`)
    await obj.remove()
  }

  async update (id, args) {
    if (!(typeof (id) === 'string') && id.length > 0) throw new RangeError('id illegal')
    if (!(typeof (args) === 'object')) throw new RangeError('args cannot be null')
    if (!(Object.keys(args).every(arg => this.fields.includes(arg)))) throw new RangeError(`${this.modelName} args illegal`)

    const obj = await this.Model.findOne({_id: id})
    if (!obj) throw new RangeError(`${this.modelName} not found`)

    Object.keys(args).forEach((arg) => { obj[arg] = args[arg] })
    await obj.save()
  }

  // todo rewrite _id to id
  async retrieve (id) {
    if (!(typeof (id) === 'string') && id.length > 0) throw new RangeError('slug type illegal')

    return this.Model.findOne({_id: id})
  }

  async retrieveMultiple (order, offset, limit, conditions = {}) {
    if (!(typeof (order) === 'string')) throw new RangeError('order type illegal')
    if (!(typeof (offset) === 'number')) throw new RangeError('offset type illegal.')
    if (!(typeof (limit) === 'number')) throw new RangeError('limit type illegal.')
    if (!(Object.keys(conditions).every(arg => this.fields.includes(arg)))) throw new RangeError(`${this.modelName} args illegal`)

    return this.Model.find().sort(order).skip(offset).limit(limit)
  }
}

export default Common
