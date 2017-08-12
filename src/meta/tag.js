"use strict";

import models from '../persistence/models';

const _tagField = Object.keys(models.Tag.schema.obj);

class Tag {

    static async createTag(tagArgs) {
        if (!(Object.keys(tagArgs).every((arg) => _tagField.includes(arg)))) throw new RangeError('tag type illegal');

        let category = new models.Tag(tagArgs);
        await category.save();
    }

    static async deleteTag(id) {
        if (!(typeof (id) === 'string') && id.length > 0) throw new RangeError('id type illegal');

        let category = await models.Tag.findOne({_id: id});
        if (!category) throw Error('Tag not Found');
        await category.remove();
    }

    static async updateTag(id, categoryArgs) {
        if (!(typeof (id) === 'string') && id.length > 0) throw new RangeError('slug type illegal');
        if (!(typeof (categoryArgs) === 'object')) throw new RangeError('tag args cannot be null');
        if (!(Object.keys(categoryArgs).every((arg) => _tagField.includes(arg)))) throw new RangeError('tag type illegal');

        let tag = await models.Tag.findOne({_id: id});
        if (!tag) throw new RangeError('tag not found');

        Object.keys(categoryArgs).forEach((arg) => tag[arg] = categoryArgs[arg]);
        await tag.save();
    }

    // todo rewrite _id to id
    static async queryTag(id) {
        if (!(typeof (id) === 'string') && id.length > 0) throw new RangeError('slug type illegal');

        return await models.Tag.findOne({_id: id});
    }

    // todo rewrite _id to id
    static async queryMultiTag(order, offset, limit) {
        if (!(typeof (order) === 'string')) throw new RangeError('order type illegal');
        if (!(typeof (offset) === 'number')) throw new RangeError('offset type illegal.');
        if (!(typeof (limit) === 'number')) throw new RangeError('limit type illegal.');

        return await models.Tag.find().sort(order).skip(offset).limit(limit);
    }
}

module.exports = Tag;