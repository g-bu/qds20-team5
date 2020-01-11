const model = require('../models/qds_team5_model');
const cookieSession = require('cookie-session');

exports.user_add_event = (req, res) => {
    console.log('user event creation touched from events controller');
    let email = req.session.userEmail;
    model.user_add_event(req.body, function() {
        console.log('db return joy')
        res.redirect('/');
    })
};