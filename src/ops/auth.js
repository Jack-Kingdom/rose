/*
  all auth function in this file.
  include: register, login, changedPassword
  all function return nothing if operation legal
  else an error will be throw, remember catch it on topper layer
 */

import crypto from 'crypto'
import config from '../../config'
import Meta from '../meta'

const sha256 = (msg) => {
  const hash = crypto.createHash('sha256')
  hash.update(msg)
  return hash.digest('hex')
}

const hashPass = (email, password) => sha256(sha256(email) + sha256(password))

export default {
  async register (req, email, password) {
    if (!config.openRegister) throw Error('register not allowed')

    const check = await Meta.Account.retrieve(email)
    if (check) throw new RangeError('email has been registered.')

    await Meta.Account.create({email: email, password: hashPass(email, password), createdAt: Date.now()})
  },

  async login (req, email, password) {
    const account = await Meta.Account.retrieve(email)
    if (!account) throw new RangeError('email not exist')
    if (!(account.password === hashPass(email, password))) throw RangeError('email and password not match')

    await Meta.Account.update({email: email, lastLogin: Date.now()})
  },

  async logout (req) {
    if (!req.hasLogged) throw Error('account that haven\'t logged try to logout')

    req.hasLogged = false
  },

  async changePassword (req, email, oldPassword, newPassword) {
    const account = await Meta.Account.retrieve(email)
    if (!account) throw new RangeError('email not exist')
    if (!(account.password === hashPass(email, oldPassword))) throw RangeError('email and password not match')

    await Meta.Account.update(email, {password: hashPass(email, newPassword)})
  }
}
