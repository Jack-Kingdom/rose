"use strict";

import models from '../persistence/models';

class Article {

    static async createArticle(args) {
        let article = new models.Article(args);
        await article.save();
    }

    static async deleteArticle(id) {
        if (!(typeof (id) === 'string') && id.length > 0) throw new RangeError('id type illegal');

        let article = await models.Article.findOne({_id: id});
        if (!article) throw Error('Article not Found');
        await article.remove();
    }

    static async updateArticle(id, args) {
        if (!(typeof (id) === 'string') && id.length > 0) throw new RangeError('slug type illegal');

        let article = await models.Article.findOne({slug: id});
        console.log(models.Article);
    }

    static async queryArticle(id) {
        if (!(typeof (id) === 'string') && id.length > 0) throw new RangeError('slug type illegal');

        // todo rethink here, suggest fetch all data in at once query
        return await models.Article.findOne({_id: id});
    }

    // todo rewrite _id to id
    static async queryMultiArticle(order, offset, limit) {
        if (!(typeof (order) === 'string')) throw new RangeError('order type illegal');
        if (!(typeof (offset) === 'number')) throw new RangeError('offset type illegal.');
        if (!(typeof (limit) === 'number')) throw new RangeError('limit type illegal.');

        return await models.Article.find().sort(order).skip(offset).limit(limit);
    }
}

module.exports = Article;