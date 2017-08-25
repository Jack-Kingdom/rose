import express from 'express'
import morgan from 'morgan'
import session from 'express-session'
import config from '../config'

const router = express.Router()

// add http logger
router.use(morgan('short'))

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

router.use('/api/graphql', require('./api/graphql'))
router.use('/api/rest', require('./api/rest'))
router.use('/api/media', require('./api/media'))
router.use('/api/auth', require('./api/auth'))

export default router
