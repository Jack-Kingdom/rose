/*
  this function used to catch err and format result.
  todo: not finished
 */

import logger from '../logger'

export default (target, property, descriptor) => {
  const originFunc = descriptor.value

  function wrapper () {
    // const req = arguments[0]
    // if (!req.hasLogged) throw RangeError('Permission deny')
    // else return originFunc.apply(null, arguments)

    let result = null
    try {
      result = originFunc.apply(null, arguments)
    } catch (err) {

    }
  }

  descriptor.value = wrapper
  return descriptor
}
