"use strict";

import crypto from 'crypto';
import isEmail from 'validator/lib/isEmail';
import models from '../persistence/models';

const _sha256 = (msg) => {
    const hash = crypto.createHash('sha256');
    hash.update(msg);
    return hash.digest('hex');
};

const _hashPass = (email, password) => _sha256(_sha256(email) + _sha256(password));

class Auth {
    static async register(email, password) {
        if (typeof(email) !== 'string' || typeof(password) !== 'string') throw new TypeError('parameter type illegal.');
        if (isEmail(email) === false) throw new RangeError('email value illegal.');

        let check = await models.Account.findOne({email: email});
        if (check) throw new RangeError('email has been registered.');
        else {
            const hashPassword = _hashPass(email, password);
            let account = new models.Account({email: email, password: hashPassword, createdAt: Date.now()});
            await account.save();
        }
    }

    static async login(email, password) {
        if (typeof(email) !== 'string' || typeof(password) !== 'string') throw new TypeError('parameter type illegal.');
        if (isEmail(email) === false) throw new RangeError('email value illegal.');

        let account = await models.Account.findOne({email: email});
        if (!account) throw new RangeError('email not exist');
        else if (account.password === _hashPass(email, password)) {
            account.lastLogin = Date.now();
            await account.save();
        } else throw new RangeError('email and password not match');
    }

    static async changePassword(email, oldPassword, newPassword) {
        if (typeof (email) !== 'string' || typeof(oldPassword) !== 'string' || typeof(newPassword) !== 'string') throw TypeError('parameter type illegal.');
        if (isEmail(email) === false) throw new RangeError('email value illegal.');

        let account = await models.Account.findOne({email: email});
        if (!account) throw new RangeError('email not exist');
        else if (account.password === _hashPass(email, oldPassword)) {
            account.password = _hashPass(email, newPassword);
            await account.save();
        } else throw new RangeError('email and password not match');
    }
}

export default Auth;