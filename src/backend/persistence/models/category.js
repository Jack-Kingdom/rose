/**
 * Created by Jack on 3/16/17.
 */

import Sequelize from 'sequelize'
import database from '../database/index'

let Category = database.define('Category', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
    },

    // category name
    name: Sequelize.STRING,

},{
    timestamps:false
});

export default Category;