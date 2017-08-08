"use strict";
import crypto from 'crypto'
import models from '../../persistence/models';

const _sha256 = (msg) => {
    const hash = crypto.createHash('sha256');
    hash.update(msg);
    return hash.digest('hex');
};

class Auth {
    static async register(email, password) {
        if (typeof(email) !== 'string' || typeof(password) !== 'string') throw new TypeError('email or password illegal.');
        let check = await models.Account.findOne({email: email});
        if (check) throw new RangeError('email has been registered.');
        else {
            let hashPassword = _sha256(_sha256(email) + _sha256(password));
            let account = new models.Account({email: email, password: hashPassword, createdAt: Date.now()});
            await account.save();
        }
    }

    static async login(email, password) {
        if (typeof(email) !== 'string' || typeof(password) !== 'string') throw new TypeError('email or password illegal.');
        let account = await models.Account.findOne({email: email});
        if (!account) throw new RangeError('email not exist');
        else if (account.password === _sha256(_sha256(email) + _sha256(password))) {
            account.lastLogin = Date.now();
            await account.save();
        } else throw new RangeError('email and password not match');
    }

    static async changePassword(email,oldPassword, newPassword){
        if(typeof (email)!=='string' || typeof(oldPassword)!== 'string' || typeof(newPassword)!=='string') throw TypeError('email,oldPassword or newPassword type illegal.');
        let account = await models.Account.findOne({email: email});
        if (!account) throw new RangeError('email not exist');
        else if (account.password === _sha256(_sha256(email) + _sha256(oldPassword))) {
            account.password = _sha256(_sha256(email) + _sha256(newPassword));
            await account.save();
        } else throw new RangeError('email and password not match');
    }
}

export default Auth;