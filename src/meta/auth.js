import crypto from 'crypto'
import isEmail from 'validator/lib/isEmail'
import models from '../persistence/models'

const sha256 = (msg) => {
  const hash = crypto.createHash('sha256')
  hash.update(msg)
  return hash.digest('hex')
}

const hashPass = (email, password) => sha256(sha256(email) + sha256(password))

// todo consider reuse validate code
class Auth {
  static async register (email, password) {
    if (typeof (email) !== 'string' || typeof (password) !== 'string') throw new TypeError('parameter type illegal.')
    if (isEmail(email) === false) throw new RangeError('email value illegal.')

    const check = await models.Account.findOne({email})
    if (check) throw new RangeError('email has been registered.')
    else {
      const hashPassword = hashPass(email, password)
      const account = new models.Account({email, password: hashPassword, createdAt: Date.now()})
      await account.save()
    }
  }

  static async login (email, password) {
    if (typeof (email) !== 'string' || typeof (password) !== 'string') throw new TypeError('parameter type illegal.')
    if (isEmail(email) === false) throw new RangeError('email value illegal.')

    const account = await models.Account.findOne({email})
    if (!account) throw new RangeError('email not exist')
    else if (account.password === hashPass(email, password)) {
      account.lastLogin = Date.now()
      await account.save()
    } else throw new RangeError('email and password not match')
  }

  static async changePassword (email, oldPassword, newPassword) {
    if (typeof (email) !== 'string' || typeof (oldPassword) !== 'string' || typeof (newPassword) !== 'string') throw TypeError('parameter type illegal.')
    if (isEmail(email) === false) throw new RangeError('email value illegal.')

    const account = await models.Account.findOne({email})
    if (!account) throw new RangeError('email not exist')
    else if (account.password === hashPass(email, oldPassword)) {
      account.password = hashPass(email, newPassword)
      await account.save()
    } else throw new RangeError('email and password not match')
  }
}

module.exports = Auth
