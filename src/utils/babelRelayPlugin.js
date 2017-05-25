import BabelRelayPlugin from 'babel-relay-plugin'
const schema = require('../../graphql.schema.json');

module.exports = BabelRelayPlugin(schema.data);