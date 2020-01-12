const events_controller = require('../controllers/events_controller');
const express = require('express');
const router = express.Router();

router.post('/user_add_event', events_controller.user_add_event);

router.post('/user_add_sub_event', function (req, res) {
    events_controller.user_add_sub_event( req.body, function(sub_event_data) {
        console.log(sub_event_data)
        res.render('subEntries', { 'emailData': req.session.userEmail, 'subEventList': sub_event_data, 'emailData': req.session.userEmail, 'messageData': 'Welcome to QDS Team 5' });
    });
})
router.post('/delete_event', events_controller.delete_event);

router.post('/get_sub_events', function (req, res) {
    events_controller.get_sub_events( req.body.message, function(sub_event_data) {
        console.log(sub_event_data)
        res.render('subEntries', { 'emailData': req.session.userEmail, 'subEventList': sub_event_data, 'emailData': req.session.userEmail, 'messageData': 'Welcome to QDS Team 5' });
    });
})


module.exports = router;
