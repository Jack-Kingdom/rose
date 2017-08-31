/*

 */

import logger from '../logger'

class CustomError extends Error {
  constructor (msg, meta, lvl) {
    super(msg)

    Error._captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
  }
}