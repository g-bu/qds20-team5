const events_controller = require('../controllers/events_controller');
const express = require('express');
const router = express.Router();

router.post('/user_add_event', events_controller.user_add_event);

module.exports = router;
