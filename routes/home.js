const events_controller = require('../controllers/events_controller');
const express = require('express');
const router = express.Router();
const cookieSession = require('cookie-session');
var QRCode = require('qrcode')

router.get('/', function (req, res) {
    let sessionEmail = req.session.userEmail;
    console.log('session id in home.js: ' + sessionEmail);
    if (typeof req.session.userEmail === 'undefined'
        || req.session.userEmail == '' || req.session.userEmail == {}) {
        console.log('user not logged in, forwarding to signup/login');
        res.render('login', { 'messageData': 'Please sign up or log in to get started!' });
    }
    else {
        console.log('user logged in.  forwarding to index');
        if (req.session.userRole.localeCompare('admin') == 0) {
            events_controller.get_user_events(function(event_data) {
                console.log(event_data);
                res.render('admin', { 'emailData': req.session.userEmail, 'eventList': event_data, 'emailData': req.session.userEmail, 'messageData': 'Welcome to QDS Team 5' });
            })
        } else {
            QRCode.toDataURL(req.session.userEmail, function (err, url) {
                res.render('index', { 'emailData': req.session.userEmail, 'messageData': 'Welcome to QDS Team 5', 'qr': url });
            })
        }
    }
})

module.exports = router;