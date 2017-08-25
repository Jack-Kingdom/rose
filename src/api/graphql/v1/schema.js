import fs from 'fs'
import path from 'path'
import { buildSchema } from 'graphql'

let schema = undefined

fs.readFile(path.join(__dirname, 'schema.graphqls'), (err, data) => {
  if (err) throw err

  // console.log(data.toString())
  schema = buildSchema(data.toString())

})

export default schema
