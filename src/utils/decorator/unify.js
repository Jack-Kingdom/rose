/*
  this decorator used to:
    1. print access logging.
    2. catch error and return err message.
    3. return origin function result if no error occurred.
 */

import logger from '../logger'

export default (target, property, descriptor) => {
  const originFunc = descriptor.value

  async function wrapper () {
    try {
      // todo: add more access detail log
      logger.info('access', property)
      return await originFunc.apply(null, arguments)
    } catch (err) {
      // todo: less logger output
      logger.warn(err.message, arguments)
      return {msg: err.message}
    }
  }

  descriptor.value = wrapper
  return descriptor
}
