/*
  this decorator used to:
    1. catch error and return unify err message.
    2. return origin function result if no error occurred.
 */

export default (target, property, descriptor) => {
  const originFunc = descriptor.value

  async function wrapper () {
    try {
      return await originFunc.apply(null, arguments)
    } catch (err) {
      return {error: err.message}
    }
  }

  descriptor.value = wrapper
  return descriptor
}
