import isEmail from 'validator/lib/isEmail'
import Models from '../persistence/models'

const Model = Models.Account
const fields = Object.keys(Models.Account.schema.obj)

export default {

  async create (args) {
    if (!(typeof (args) === 'object')) throw new TypeError('args cannot be null')
    if (!isEmail(args.email)) throw new RangeError('email must be provided.')
    if (!(Object.keys(args).every(arg => fields.includes(arg)))) throw new RangeError(`${Model.modelName} args illegal`)

    const check = Model.findOne({slug: args.email})
    if(check) throw new Error('')
    const obj = new Model(args)
    await obj.save()
    return obj
  },

  async remove (email) {
    if (!isEmail(email)) throw TypeError('email argument illegal.')

    const obj = await Model.findOne({email: email})
    if (!obj) throw new Error(`${Model.modelName} not Found`)
    await obj.remove()
    return obj
  },

  async update (email, args) {
    if (!isEmail(email)) throw new TypeError('email argument illegal.')
    if (!(typeof (args) === 'object')) throw new TypeError('args cannot be null')
    if (!(Object.keys(args).every(arg => fields.includes(arg)))) throw new RangeError(`${Model.modelName} args illegal`)

    const obj = await Model.findOne({email: email})
    if (!obj) throw new RangeError(`email with ${email} not found`)

    Object.keys(args).forEach((arg) => { obj[arg] = args[arg] })
    await obj.save()
    return obj
  },

  async retrieve (email) {
    if (!isEmail(email)) throw TypeError('email argument illegal.')

    const obj = Model.findOne({email: email})
    if (!obj) throw new RangeError(`email with ${email} not found`)
    else return obj
  },

  multipleRetrieve: async (order, offset, limit, conditions = {}) => {
    if (!(typeof (order) === 'string')) throw new RangeError('order type illegal')
    if (!(typeof (offset) === 'number')) throw new RangeError('offset type illegal.')
    if (!(typeof (limit) === 'number')) throw new RangeError('limit type illegal.')
    if (!(Object.keys(conditions).every(arg => fields.includes(arg)))) throw new RangeError(`${Model.modelName} args illegal`)

    return Model.find(conditions).sort(order).skip(offset).limit(limit)
  }
}
