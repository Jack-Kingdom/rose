/**
 * Created by Jack on 12/18/16.
 */

import Sequelize from 'sequelize'
import database from '../database/index'

let Article = database.define('Article', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
        },

        title: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },

        // current article's url
        url: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },

        // foreign key for Category id
        category: Sequelize.INTEGER,

        // parsed html content
        content: Sequelize.TEXT,

        // article status：published、draft、deleted
        status: Sequelize.ENUM('published', 'draft', 'deleted'),

        // SEO
        meta_title: Sequelize.STRING,
        meta_description: Sequelize.STRING,


        // store timestamp with bigint
        created_at: Sequelize.BIGINT,
        updated_at: Sequelize.BIGINT,


        // article support comment function or not
        comment_support: Sequelize.BOOLEAN,
    },
    {
        timestamps:false,
    });

export default Article;