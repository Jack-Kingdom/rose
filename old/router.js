import express from 'express'
import morgan from 'morgan'
import session from 'express-session'
import {graphqlRouter,restRouter,mediaRouter,authRouter} from './api'
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

router.use('/api/graphql', graphqlRouter)
router.use('/api/rest', restRouter)
router.use('/api/media', mediaRouter)
router.use('/api/auth', authRouter)

export default router
