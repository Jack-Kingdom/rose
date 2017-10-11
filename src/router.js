import express from 'express'
import morgan from 'morgan'
import session from 'express-session'
import { restRouter, mediaRouter, authRouter } from './api'
import config from '../config'

const router = express.Router()

// add http logger
// get real ip if passed by nginx
morgan.token('remote-addr', function (req) {
  return req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress
})
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

// graphql is disable on current version.
// router.use('/api/graphql', graphqlRouter)
router.use('/api/rest', restRouter)
router.use('/api/media', mediaRouter)
router.use('/api/auth', authRouter)

export default router
