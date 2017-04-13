/**
 * Created by Jack on 3/18/17.
 */
import Sequelize from 'sequelize'
import database from '../database/index'

let ArticleTag = database.define('ArticleTag', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
    },

    article_id: Sequelize.INTEGER,
    tag_id: Sequelize.INTEGER,

});

export default ArticleTag;