const express = require('express');
const router = express.Router();
const cookieSession = require('cookie-session');

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
        res.render('index', { 'emailData': req.session.userEmail, 'messageData':'Welcome to QDS Team 5' } );
    }
})

module.exports = router;