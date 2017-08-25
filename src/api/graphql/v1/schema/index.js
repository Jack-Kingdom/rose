import fs from 'fs'
import path from 'path'
import { buildSchema } from 'graphql'

const data = fs.readFileSync(path.join(__dirname, 'schema.graphqls'), {encoding: 'utf-8'})
const schema = buildSchema(data)

export default schema
