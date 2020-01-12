const stats_controller = require('../controllers/stats_controller');
const express = require('express');
const router = express.Router();


router.post('/', function (req, res) {
    console.log('getting stats');
    stats_controller.get_stats(function(visit_data) {
        console.log("stats reached");
        console.log(visit_data);
        res.render('stats', { 'emailData': req.session.userEmail, 'visitData': visit_data, 'emailData': req.session.userEmail, 'messageData': 'Welcome to QDS Team 5' });
    });
})

module.exports = router;
