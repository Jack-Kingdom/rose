import fs from 'fs'
import path from 'path'
import {graphql} from 'graphql';
import {introspectionQuery} from 'graphql/utilities'
import schema from '../backend/api/graphql/schema'

graphql(schema, introspectionQuery).then(function (result) {
    if (result.errors) return console.error(result.errors);
    fs.writeFileSync(path.join(__dirname, '../../graphql.schema.json'), JSON.stringify(result, null, 2))
});