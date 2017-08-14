
import express from 'express'
import morgan from 'morgan'
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

// load http logger
router.use(morgan('short'))

router.use('/api/graphql', require('./api/graphql'))
router.use('/api/restful', require('./api/restful'))
router.use('/api/media', require('./api/media'))
router.use('/api/auth', require('./api/auth'))

export default router
