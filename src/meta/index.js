
import models from '../persistence/models'
import Common from './common'

export default {
  Article: new Common(models.Article),
  Category: new Common(models.Category),
  Tag: new Common(models.Tag),
  Auth: require('./auth'),
  Media: require('./media')
}
