/*

 */

import logger from '../logger'

class CustomError extends Error {
  constructor (msg, meta, lvl) {
    // Calling parent constructor of base Error class.
    super(msg)

    // Capturing stack trace, excluding constructor call from it.
    Error._captureStackTrace(this, this.constructor)

    // Saving class name in the property of our custom error as a shortcut.
    this.name = this.constructor.name

    // You can use any additional properties you want.
    // I'm going to use preferred HTTP status for this error types.
    // `500` is the default value if not specified.
    this.status = status || 500
  }
}
