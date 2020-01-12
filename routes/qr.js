const qr_controller = require('../controllers/qr_controller');
const stast_controller = require('../controllers/stats_controller')
const express = require('express');
const router = express.Router();

router.post('/event_get_scanner', function (req, res) {
    console.log(req.body.hidden_event_input)
        res.render('event_scanner', { 'eventId': req.body.hidden_event_input, 'emailData': req.session.userEmail, 'messageData': 'EventId #' + req.body.hidden_event_input });
})

router.post('/sub_event_get_scanner', function (req, res) {
    console.log(req.body.hidden_event_input)
        res.render('sub_event_scanner', { 'subEventId': req.body.hidden_event_input, 'emailData': req.session.userEmail, 'messageData': 'EventId #' + req.body.hidden_event_input });
})

router.post('/event_scan', qr_controller.event_scan);

router.post('/sub_event_scan', qr_controller.sub_event_scan);

module.exports = router;
