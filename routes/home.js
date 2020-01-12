const events_controller = require('../controllers/events_controller');
const stats_controller = require('../controllers/stats_controller');
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
            // events_controller.get_user_events(function(event_data) {
            //     console.log(event_data);
            //     res.render('admin', { 'emailData': req.session.userEmail, 'eventList': event_data, 'emailData': req.session.userEmail, 'messageData': 'Welcome to QDS Team 5' });
            // })
            stats_controller.get_stats(function(event_data) {
                count = 0;
                // sum = 0;
                for (i=0; i<event_data.length; i++) {
                    // console.log(event_data[i].rating1);
                    count++;
                    // sum+=event_data[i].rating1;
                }
                // console.log("Average = " + sum/count);
                res.render('stats', { 'emailData': req.session.userEmail, 'average': count, 'eventList': event_data, 
                'emailData': req.session.userEmail, 'messageData': 'Welcome to QDS Team 5' })
            })
        } else {
            QRCode.toDataURL(req.session.userEmail, function (err, url) {
                res.render('index', { 'emailData': req.session.userEmail, 'messageData': 'Welcome to QDS Team 5', 'qr': url });
            })
        }
    }
})

module.exports = router;