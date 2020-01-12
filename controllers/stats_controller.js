const model = require('../models/qds_team5_model');
const cookieSession = require('cookie-session');

exports.get_stats = (callback) => {
    console.log('trying to get stats: ');
    model.get_stats(function(model_response) {
        callback(model_response);
    })
};