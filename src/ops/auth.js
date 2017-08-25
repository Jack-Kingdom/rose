import crypto from 'crypto'
import models from '../persistence/models'

const sha256 = (msg) => {
  const hash = crypto.createHash('sha256')
  hash.update(msg)
  return hash.digest('hex')
}

const hashPass = (email, password) => sha256(sha256(email) + sha256(password))

export default {
  async register (email, password) {

    const check = await models.Account.findOne({email})
    if (check) throw new RangeError('email has been registered.')
    else {
      const hashPassword = hashPass(email, password)
      const account = new models.Account({email, password: hashPassword, createdAt: Date.now()})
      await account.save()
    }
  },

  async login (email, password) {
    const account = await models.Account.findOne({email})
    if (!account) throw new RangeError('email not exist')
    else if (account.password === hashPass(email, password)) {
      account.lastLogin = Date.now()
      await account.save()
    } else throw new RangeError('email and password not match')
  },

  async changePassword (email, oldPassword, newPassword) {
    const account = await models.Account.findOne({email})
    if (!account) throw new RangeError('email not exist')
    else if (account.password === hashPass(email, oldPassword)) {
      account.password = hashPass(email, newPassword)
      await account.save()
    } else throw new RangeError('email and password not match')
  }
}
