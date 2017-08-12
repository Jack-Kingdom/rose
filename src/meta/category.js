"use strict";

import models from '../persistence/models';

const _categoryField = Object.keys(models.Category.schema.obj);

class Category {

    static async createCategory(categoryArgs) {
        if (!(Object.keys(categoryArgs).every((arg) => _categoryField.includes(arg)))) throw new RangeError('article type illegal');

        let category = new models.Category(categoryArgs);
        await category.save();
    }

    static async deleteCategory(id) {
        if (!(typeof (id) === 'string') && id.length > 0) throw new RangeError('id type illegal');

        let category = await models.Category.findOne({_id: id});
        if (!category) throw Error('Article not Found');
        await category.remove();
    }

    static async updateCategory(id, categoryArgs) {
        if (!(typeof (id) === 'string') && id.length > 0) throw new RangeError('slug type illegal');
        if (!(typeof (categoryArgs) === 'object')) throw new RangeError('category args cannot be null');
        if (!(Object.keys(categoryArgs).every((arg) => _categoryField.includes(arg)))) throw new RangeError('category type illegal');

        let category = await models.Category.findOne({_id: id});
        if (!category) throw new RangeError('category not found');

        Object.keys(categoryArgs).forEach((arg) => category[arg] = categoryArgs[arg]);
        await category.save();
    }

    // todo rewrite _id to id
    static async queryCategory(id) {
        if (!(typeof (id) === 'string') && id.length > 0) throw new RangeError('slug type illegal');

        return await models.Category.findOne({_id: id});
    }

    // todo rewrite _id to id
    static async queryMultiCategory(order, offset, limit) {
        if (!(typeof (order) === 'string')) throw new RangeError('order type illegal');
        if (!(typeof (offset) === 'number')) throw new RangeError('offset type illegal.');
        if (!(typeof (limit) === 'number')) throw new RangeError('limit type illegal.');

        return await models.Category.find().sort(order).skip(offset).limit(limit);
    }
}

module.exports = Category;