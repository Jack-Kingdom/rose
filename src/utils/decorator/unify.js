/*
  this decorator used to:
    1. print access logging.
    2. catch error and return err message.
    3. return origin function return if no error occurred.
 */

import logger from '../logger'

export default (target, property, descriptor) => {
  const originFunc = descriptor.value

  async function wrapper () {
    // const req = arguments[0]
    // if (!req.hasLogged) throw RangeError('Permission deny')
    // else return originFunc.apply(null, arguments)

    // logger.info()
    console.log(target, property, descriptor)

    let result = null
    try {
      result = await originFunc.apply(null, arguments)
    } catch (err) {
      return err.message
    }
    return result
  }

  descriptor.value = wrapper
  return descriptor
}
