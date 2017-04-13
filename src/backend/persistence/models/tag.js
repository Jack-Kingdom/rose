/**
 * Created by Jack on 12/18/16.
 */

import Sequelize from 'sequelize'
import database from '../database/index'

let Tag = database.define('Tag', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
    },

    // current tag's name
    name: Sequelize.STRING,

});

export default Tag;