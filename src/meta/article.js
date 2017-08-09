"use strict";

import models from '../persistence/models';

class Article {

    static async createArticle() {

    }

    static async deleteArticle() {

    }

    static async updateArticle() {

    }

    static async queryArticle(slug) {
        if(!(typeof (slug)==='string')) throw new RangeError('slug type illegal');

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