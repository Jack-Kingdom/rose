export default {
  port: 3000,
  session_secret: 'secret string',
  mongodbUrl: 'mongodb://localhost:27017/DevRose',
  openRegister: true,
  graphqlMaxDepth: 1,

  // unit: second, value: 1 week
  sessionTimeout: 7 * 24 * 60 * 60
}
