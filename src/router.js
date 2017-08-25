import express from 'express'
import session from 'express-session'
import config from '../config'

const router = express.Router()

// load session
router.use(session({
  secret: config.session_secret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    HttpOnly: true,
    sameSite: 'strict'
  }
}))

router.use('/api/graphql', require('./api/graphql/v1/index'))
router.use('/api/rest', require('./api/rest'))
router.use('/api/media', require('./api/media'))
router.use('/api/auth', require('./api/auth'))

export default router
