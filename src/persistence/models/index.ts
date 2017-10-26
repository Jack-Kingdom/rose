/*
  wrap models together
 */

import * as glob from 'glob'

// glob('*.js', {cwd: __dirname, ignore: ['index.js']}, (err, files) => {
//     if (err) throw err;
//
//     files.forEach((file)=>{
//         let key = file.split('.')[0];
//         exports[key] = require(file);
//     })
// });

import Account from './account'
import Article from './article'
import Tag from './tag'
import Media from './media'

export default {
    Account,
    Article,
    Tag,
    Media
}