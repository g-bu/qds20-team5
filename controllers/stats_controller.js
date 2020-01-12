const model = require('../models/qds_team5_model');
const cookieSession = require('cookie-session');

exports.get_stats = (callback) => {
    console.log('trying to get stats: ');
    model.get_stats(function(model_response) {
        console.log(model_response)
        callback(model_response)
    })
};

exports.get_rating_questions = (eventId, subEventId, callback) => {
    console.log('trying to get questions for stats: ' + eventId);
    model.get_rating_questions(eventId, subEventId, function(model_response) {
        callback(model_response)
    })
};

exports.get_ratings = (eventId, subEventId, callback) => {
    console.log('stats controller sub event id: ' + eventId);
    console.log('trying to get ratings for stats: ' + subEventId);
    model.get_ratings(eventId, subEventId, function(model_response) {
        // console.log('controller after db: ' + model_response.rating1)
        callback(model_response)
    })
};