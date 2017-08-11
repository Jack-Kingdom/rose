"use strict";

import models from '../persistence/models';

const _articleField = Object.keys(models.Article.schema.obj);

class Article {

    static async createArticle(articleArgs) {
        if (!(Object.keys(articleArgs).every((arg) => _articleField.includes(arg)))) throw new RangeError('article type illegal');

        let article = new models.Article(articleArgs);
        await article.save();
    }

    static async deleteArticle(id) {
        if (!(typeof (id) === 'string') && id.length > 0) throw new RangeError('id type illegal');

        let article = await models.Article.findOne({_id: id});
        if (!article) throw Error('Article not Found');
        await article.remove();
    }

    static async updateArticle(id, articleArgs) {
        if (!(typeof (id) === 'string') && id.length > 0) throw new RangeError('slug type illegal');
        if (!(typeof (articleArgs) === 'object')) throw new RangeError('article args cannot be null');
        if (!(Object.keys(articleArgs).every((arg) => _articleField.includes(arg)))) throw new RangeError('article type illegal');

        let article = await models.Article.findOne({_id: id});
        if (!article) throw new RangeError('article not found');

        Object.keys(articleArgs).forEach((arg) => article[arg] = articleArgs[arg]);
        await article.save();
    }

    // todo rewrite _id to id
    static async queryArticle(id) {
        if (!(typeof (id) === 'string') && id.length > 0) throw new RangeError('slug type illegal');

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