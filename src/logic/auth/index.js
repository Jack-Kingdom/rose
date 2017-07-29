"use strict";
import crypto from 'crypto'
import models from '../../persistence/models';

const _sha256 = (msg) => {
    const hash = crypto.createHash('sha256');
    hash.update(msg);
    return hash.digest('latin1');
};

class Auth {
    async register(email, password) {
        if (typeof(email) !== 'string' || typeof(password) !== 'string') throw new TypeError('email or password illegal.');
        let check = await models.Account.findOne({email: email});
        if (check) throw new RangeError('email has been registered.');
        else {
            let hashPassword = _sha256(_sha256(email) + _sha256(password));
            let account = new models.Account({email: email, password: hashPassword, createdAt: Date.now()});
            await account.save();
            return true;
        }
    }

    async login(email, password) {
        if (typeof(email) !== 'string' || typeof(password) !== 'string') throw new TypeError('email,password or remember illegal.');
        let check = await models.Account.findOne({email: email});
        if (!check) return RangeError('email not exist');
        else return check.password === _sha256(_sha256(email) + _sha256(password));
    }
}

export default Auth;