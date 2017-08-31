import express from 'express'
import bodyParser from 'body-parser'
import Ops from '../../ops'
import logger from '../../utils/logger'

const authRouter = express.Router()

// use body-parser to load json data
authRouter.use(bodyParser.json())

authRouter.post('/register', async (req, res) => {
  const email = req.body.email
  const password = req.body.password

  try {
    await Ops.Auth.register(req, email, password)
    logger.info('register success', {account: email})
    return res.json({success: true})
  } catch (err) {
    logger.info('register fails', {account: email, msg: err.message})
    return res.json({success: false, msg: err.message})
  }
})

authRouter.post('/login', async (req, res) => {
  const email = req.body.email
  const password = req.body.password

  try {
    await Ops.Auth.login(req, email, password)
    logger.info('login success', {account: email})
    return res.json({success: true})
  } catch (err) {
    logger.info('login fails', {account: email, msg: err.message})
    return res.json({success: false, msg: 'email or password not match'})
  }
})

authRouter.use('/logout', async (req, res) => {
  if (req.session.hasLogged) {
    logger.info('logout success')
    return res.json({success: true})
  }
  logger.warn('account that haven\'t logged try to logout')
  return res.json({success: false, msg: 'please login first'})
})

authRouter.post('/change-password', async (req, res) => {
  const email = req.body.email
  const originPassword = req.body.oldPassword
  const newPassword = req.body.newPassword

  try {
    await Ops.Auth.changePassword(req, email, originPassword, newPassword)
    logger.info('change password success', {account: email})
    return res.json({success: true})
  } catch (err) {
    logger.info('change password success', {account: email})
    return res.json({success: false, msg: 'origin password not match'})
  }
})

// catch err
authRouter.use((err, req, res, next) => {
  if (err) {
    logger.error('authRouter-error', {err})
    return res.status(500)
  }
  return next()
})

module.exports = authRouter
