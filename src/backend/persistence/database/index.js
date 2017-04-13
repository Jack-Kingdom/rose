/**
 * Created by Jack on 3/17/17.
 */

import Sequelize from 'sequelize'
import config from '../../config'

let db_config = config.database;

let database = new Sequelize(db_config.database, db_config.username, db_config.password, db_config.options);

export default database;