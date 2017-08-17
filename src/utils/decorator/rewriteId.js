module.exports = (target, property, descriptor) => {
  console.log(target, property, descriptor)

  const originFunc = descriptor.value

  const rewriteID = (obj) => {
    obj.id = obj._id
    delete obj._id
    return obj
  }

  descriptor.value = (a, b, c, d) => {
    let result = originFunc(a, b, c, d)
    // todo add property check
    if (result instanceof Array) {
      result.map((obj) => rewriteID(obj))
    } else rewriteID(result)
    return result
  }

  return descriptor
}
