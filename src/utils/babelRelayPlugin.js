const BabelRelayPlugin = require('babel-plugin-relay');
const schema = require('../../graphql.schema.json');

module.exports = BabelRelayPlugin(shema = schema.data);