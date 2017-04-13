/**
 * Created by Jack on 3/18/17.
 */

import Article from './article'
import Tag from './tag'
import Category from './category'
import User from './user'
import ArticleTag from './articletag'

// wrap model in a class
let models = {
    Article: Article,
    Category: Category,
    Tag: Tag,
    User: User,
    ArticleTag: ArticleTag,
};

// init function
(async () => {

    // sync models
    for (let model in models) {
        await models[model].sync();
    }

    // define relationship for different models
    Article.belongsTo(Category, {foreignKey: 'category', targetKey: 'id'});
    Category.hasMany(Article, {foreignKey: 'category', sourceKey: 'id'});
    Article.belongsToMany(Tag, {through: 'ArticleTag', foreignKey: 'article_id', otherKey: 'tag_id'});
    Tag.belongsToMany(Article, {through: 'ArticleTag', foreignKey: 'article_id', otherKey: 'tag_id'});

    // load test data if database is empty
    let categories = await models.Category.findAll();
    let tags = await models.Tag.findAll();
    let articles = await models.Article.findAll();

    if (!(categories.length || tags.length || articles.length)) {
        let firstCategory = await models.Category.create({name: 'Uncategoried'});
        let firstTag = await models.Tag.create({name: 'Poem'});
        let secondTag = await models.Tag.create({name: 'Thinking'});
        let firstArticle = await models.Article.create({
            title: '一行小诗',
            url: 'a-little-poem',
            content: '爱你一万年',
            status: 'published',
            created_at: new Date().getTime(),
            comment_support: true,
        });

        firstArticle.setCategory(firstCategory);
        firstArticle.addTag(firstTag);
        firstArticle.addTag(secondTag);
    }

})();


export default models;