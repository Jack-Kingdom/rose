/**
 * Created by Jack on 3/18/17.
 */

import mongorito from 'mongorito'
import config from '../../config'

mongorito.connect(config.mongodbUrl);

// wrap model in a class
const models = {
    Article: require('./article'),
    Category: require('./category'),
    Tag: require('./tag'),
    Account: require('./account'),
};

export default models;