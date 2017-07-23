import fs from 'fs'
import path from 'path'
import schema from '../backend/api/graphql/schema'
import { printSchema } from 'graphql'

const schemaPath = path.resolve(__dirname, '../../src/backend/api/graphql/schema.graphqls');

fs.writeFileSync(schemaPath, printSchema(schema));

console.log('Wrote ' + schemaPath);

