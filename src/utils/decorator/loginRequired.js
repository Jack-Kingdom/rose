export default (target, property, descriptor) => {
  const originFunc = descriptor.value

  function wrapper () {
    const req = arguments[0]
    if (!req.hasLogged) return {error: 'Permission deny.'}
    else return originFunc.apply(null, arguments)
  }

  descriptor.value = wrapper
  return descriptor
}
