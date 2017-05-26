import fs from 'fs'
import path from 'path'
import {graphql} from 'graphql';
import {introspectionQuery} from 'graphql/utilities'
import schema from '../backend/api/graphql/schema'
import { printSchema } from 'graphql'

// graphql(schema, introspectionQuery).then(function (result) {
//     if (result.errors) return console.error(result.errors);
//     fs.writeFileSync(path.join(__dirname, '../../graphql.schema.json'), JSON.stringify(result.data, null, 2))
// });

const schemaPath = path.resolve(__dirname, '../../src/backend/api/graphql/schema.graphqls');

fs.writeFileSync(schemaPath, printSchema(schema));

console.log('Wrote ' + schemaPath);

