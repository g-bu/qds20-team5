const model = require('../models/qds_team5_model');
const cookieSession = require('cookie-session');

exports.user_add_event = (req, res) => {
    console.log('user event creation touched from events controller');
    model.user_add_event(req.body, function() {
        console.log('db return joy')
        res.redirect('/');
    })
};

exports.get_user_events = (callback) => {
    console.log('get user events touched from events controller');
    model.get_events(function(model_response) {
        callback(model_response);
    })
};

exports.user_add_sub_event = (req, callback) => {
    console.log('user sub event creation touched from events controller');
    console.log(req)
    model.user_add_sub_event(req, function() {
        console.log('db return joy')
    })
    // callback()
};

exports.delete_event = (req, res) => {
    console.log('delete event fired from task controller');
    console.log(req.body.message)
    model.delete_event(req.body.message, function () {
        console.log('heard back from database for deletion')
        res.redirect('/');
    })
};

exports.get_sub_events = (data, callback) => {
    console.log('go to sub events touched from events controller: ' + data);
    model.get_sub_events(data, function(model_response) {
        callback(model_response)
    })
};