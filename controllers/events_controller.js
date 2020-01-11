const model = require('../models/qds_team5_model');
const cookieSession = require('cookie-session');

exports.user_add_event = (req, callback) => {
    console.log('user event creation touched from events controller');
    let email = req.session.userEmail;
    model.user_add_event(email, function(model_response) {
        for(let i =  0; i < model_response.length; i++) {
            console.log('db return joy')
        }
        callback(model_response);
    })
};