/**
 * Created by Jack on 3/18/17.
 */

import ArticleModel from './article'
import CategoryModel from './category'
import TagModel from './tag'
import AccountModel from './account'

// wrap model in a class
const models = {
    Article: ArticleModel,
    Category: CategoryModel,
    Tag: TagModel,
    Account: AccountModel,
};

export default models;