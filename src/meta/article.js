"use strict";

import models from '../persistence/models';

class Article {

    static async createArticle(args) {
        let article = new models.Article(args);
        await article.save();
    }

    static async deleteArticle(slug) {
        if (!(typeof (slug) === 'string') && slug.length > 0) throw new RangeError('slug type illegal');

        let article = await models.Article.findOne({slug: slug});
        if (!article) throw Error('Article not Found');
        await article.remove();
    }

    static async updateArticle(slug, args) {

    }

    static async queryArticle(slug) {
        if (!(typeof (slug) === 'string') && slug.length > 0) throw new RangeError('slug type illegal');

        return await models.Article.findOne({slug: slug});
    }

    // todo rewrite _id to id
    static async queryMultiArticle(limit, order, offset) {
        if (!(typeof (limit) === 'number')) throw new RangeError('limit type illegal.');
        if (!(typeof (offset) === 'number')) throw new RangeError('offset type illegal.');
        if (!(typeof (order) === 'string')) throw new RangeError('order type illegal');

        return await models.Article.find().sort(order).skip(offset).limit(limit);
    }
}

module.exports = Article;