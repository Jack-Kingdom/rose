"use strict";

import models from '../persistence/models';

// todo think about reuse Article,Category,Tag in Meta
class Common {
    constructor(model) {
        this.model = model;
        this.modelName = model.modelName;
        this.fields = Object.keys(this.model.schema.obj);
    }

    async create(args) {
        if (!(Object.keys(args).every((arg) => this.fields.includes(arg)))) throw new RangeError(`${this.modelName} args illegal`);

        let obj = new this.model(args);
        await obj.save();
    }

    async delete(id) {
        if (!(typeof (id) === 'string') && id.length > 0) throw new RangeError('id illegal');

        let obj = await this.model.findOne({_id: id});
        if (!obj) throw Error(`${this.modelName} not Found`);
        await obj.remove();
    }

    async update(id, args) {
        if (!(typeof (id) === 'string') && id.length > 0) throw new RangeError('id illegal');
        if (!(typeof (args) === 'object')) throw new RangeError('args cannot be null');
        if (!(Object.keys(args).every((arg) => this.fields.includes(arg)))) throw new RangeError(`${this.modelName} args illegal`);

        let obj = await this.model.findOne({_id: id});
        if (!obj) throw new RangeError(`${this.modelName} not found`);

        Object.keys(args).forEach((arg) => obj[arg] = args[arg]);
        await obj.save();
    }

    // todo rewrite _id to id
    async retrieve(id) {
        if (!(typeof (id) === 'string') && id.length > 0) throw new RangeError('slug type illegal');

        return await this.model.findOne({_id: id});
    }

    // todo rewrite _id to id
    async retrieveMultiple(order, offset, limit, conditions = {}) {
        if (!(typeof (order) === 'string')) throw new RangeError('order type illegal');
        if (!(typeof (offset) === 'number')) throw new RangeError('offset type illegal.');
        if (!(typeof (limit) === 'number')) throw new RangeError('limit type illegal.');
        if (!(Object.keys(conditions).every((arg) => this.fields.includes(arg)))) throw new RangeError(`${this.modelName} args illegal`);


        return await this.model.find().sort(order).skip(offset).limit(limit);
    }
}

export default Common;