import isEmail from 'validator/lib/isEmail'
import Models from '../persistence/models'

const Model = Models.Account
const fields = Object.keys(Models.Account.schema.obj)

export default {

  async create (args) {
    if (!(typeof (args) === 'object')) throw new TypeError(`args type with ${typeof args} illegal`)
    if (!isEmail(args.email)) throw new RangeError(`email argument with ${args.email} illegal.`)
    if (!(Object.keys(args).every(arg => fields.includes(arg)))) throw new RangeError(`${Model.modelName} args illegal`)

    const exist = Model.findOne({slug: args.email})
    if (exist) throw new Error('Account with this email already exist.')
    const obj = new Model(args)
    await obj.save()
    return obj.toObject()
  },

  async remove (email) {
    if (!isEmail(email)) throw TypeError('email argument illegal.')

    const obj = await Model.findOne({email: email})
    if (!obj) throw new RangeError(`Account with email ${email} Found`)
    await obj.remove()
    return obj.toObject()
  },

  async update (email, args) {
    if (!isEmail(email)) throw new TypeError(`email argument with ${email} illegal.`)
    if (!(typeof (args) === 'object')) throw new TypeError(`args type with ${typeof args} illegal`)
    if (!isEmail(args.email)) throw new RangeError(`email argument with ${args.email} illegal.`)
    if (!(Object.keys(args).every(arg => fields.includes(arg)))) throw new RangeError(`${Model.modelName} args illegal`)

    const obj = await Model.findOne({email: email})
    if (!obj) throw new RangeError(`Account with email ${email} Found`)

    Object.keys(args).forEach((arg) => { obj[arg] = args[arg] })
    await obj.save()
    return obj.toObject()
  },

  async retrieve (email) {
    if (!isEmail(email)) throw TypeError(`email argument with ${email} illegal.`)

    const obj = Model.findOne({email: email})
    if (!obj) throw new RangeError(`Account with ${email} not found`)
    else return obj.toObject()
  },

  multipleRetrieve: async (order, offset, limit, conditions = {}) => {
    if (!(typeof (order) === 'string')) throw new RangeError('order type illegal')
    if (!(typeof (offset) === 'number')) throw new RangeError('offset type illegal.')
    if (!(typeof (limit) === 'number')) throw new RangeError('limit type illegal.')
    if (!(Object.keys(conditions).every(arg => fields.includes(arg)))) throw new RangeError(`${Model.modelName} args illegal`)

    const accounts = Model.find(conditions).sort(order).skip(offset).limit(limit)
    return accounts.map((article) => article.toObject())
  }
}
