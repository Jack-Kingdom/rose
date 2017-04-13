/**
 * Created by Jack on 3/18/17.
 */

import Article from './article'
import Tag from './tag'
import Category from './category'
import User from './user'
import ArticleTag from './articletag'

// define relationship for different models
Article.belongsTo(Category, {foreignKey: 'category', targetKey: 'id'});
Category.hasMany(Article, {foreignKey: 'category', sourceKey: 'id'});

Article.belongsToMany(Tag, {through: 'ArticleTag', foreignKey: 'article_id', otherKey: 'tag_id'});
Tag.belongsToMany(Article, {through: 'ArticleTag', foreignKey: 'article_id', otherKey: 'tag_id'});

let models = {
    Article: Article,
    Category: Category,
    Tag: Tag,
    User: User,
    ArticleTag: ArticleTag,
};

for (let model in models) {
    models[model].sync();
}

export default models;