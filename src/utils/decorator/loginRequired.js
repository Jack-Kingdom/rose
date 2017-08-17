module.exports = (target, property, descriptor) => {
  console.log(target, descriptor, descriptor)
  return descriptor
}
