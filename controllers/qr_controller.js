const model = require('../models/qds_team5_model');
const cookieSession = require('cookie-session');
const QRReader = require('qrcode-reader')
const fs = require('fs');
const jimp = require('jimp');

exports.event_scan = (req, res, callback) => {
    console.log('event scan touched from events controller');
    let message = req.body.message;
    let id = req.session.userId;
    model.event_scan(message, id, function() {
        console.log('db return joy')
    })
    callback()
};

exports.sub_event_scan = (req, res, callback) => {
    console.log('sub event touched from events controller');
    let subEventId = req.body.subEventId;
    let id = req.session.userId;
    let eventId = req.body.eventId;
    model.sub_event_scan(subEventId, eventId, id, function() {
        console.log('db return joy')
    })
    callback()
};