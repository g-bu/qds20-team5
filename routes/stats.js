const stats_controller = require('../controllers/stats_controller');
const express = require('express');
const router = express.Router();


router.post('/get_stats', function (req, res) {
    console.log('getting stats')
    stats_controller.get_stats( function(sub_event_data) {
        console.log(sub_event_data)
        // res.render('subEntries', { 'emailData': req.session.userEmail, 'subEventList': sub_event_data, 'emailData': req.session.userEmail, 'messageData': 'Welcome to QDS Team 5' });
    });
})


module.exports = router;
