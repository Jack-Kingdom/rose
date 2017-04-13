/**
 * Created by Jack on 12/18/16.
 */

import Sequelize from 'sequelize'
import database from '../database/index'

let User = database.define('User', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
    },

    email: {
        type: Sequelize.STRING,
        unique: true,
    },

    name: Sequelize.STRING,

    password: Sequelize.STRING,

}, {
    timestamps: false,
});

export default User;