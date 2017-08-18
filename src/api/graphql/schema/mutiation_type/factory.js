/*
 factory.js is a function that include mutation resolve function's basic operate,
 such as permission check, return type.
 */

module.exports = async (req, callback) => {
  if (!req.hasLogged) return {success: false, msg: 'Permission deny.'}

  try {
    await callback()
    return {success: true}
  } catch (err) {
    return {success: false, msg: err.message}
  }
}
