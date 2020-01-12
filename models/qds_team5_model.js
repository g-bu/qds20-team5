const db = require('../utilities/qds_team5_db_access');
const cookieSession = require('cookie-session');

function login(data, callback) {
    console.log('login fired from model');
    let email = data.email_attempt;
    let password = data.password_attempt;
    console.log('email attempt: ' + email + " password attempt: " + password);
    let sql_statement = "SELECT * FROM users WHERE userEmail = ?";
    let sql_params = [email];
    statement = db.format(sql_statement, sql_params);
    db.query(statement, (err, result) => {
        if (err) throw err;
        console.log('result in query :' + result[0].userEmail);
        callback(result);
    });
}

function check(data, callback) {
    console.log('check fired')
    let user = data.email_signup;
    let sql_statement = 'SELECT * FROM users WHERE userEmail = ?';
    let sql_params = [user];
    statement = db.format(sql_statement, sql_params);
    db.query(statement, (err, result) => {
        if (err) throw err;
        callback(result.length);
    });
}

function signup(data) {
    console.log('signup fired')
    let user = {
        userId: null,
        userEmail: data.email_signup,
        userPassword: data.password_01,
        userFirstName: data.first_name_signup,
        userLastName: data.last_name_signup,
        userAddress: data.address_signup,
        userGender: data.gender_signup,
        userRole: "user"
    };
    let sql_statement = 'INSERT INTO users SET ?';
    let sql_params = [user];
    statement = db.format(sql_statement, sql_params);
    db.query(statement, function (err) {
        if (err) throw err;
    });
}

function userAddEvent(data, callback) {
    console.log('user events fired from db model')
    let event = {
        eventId: null,
        eventName: data.new_event_name,
        eventAddress: data.new_event_address,
        eventStartDateTime: data.new_event_start_date + " " + data.new_event_start_time,
        eventEndDateTime: data.new_event_end_date + " " + data.new_event_end_time,
        eventDescription: data.new_event_description
    };
    console.log(event)
    let sql_statement = 'INSERT INTO events SET ?';
    let sql_params = [event];
    statement = db.format(sql_statement, sql_params);
    db.query(statement, function (err) {
        if (err) throw err;
    });
    callback();
}

function getEvents(callback) {
    console.log('model fired');
    let sql_statement = 'SELECT * FROM events';
    statement = db.format(sql_statement);
    db.query(statement, (err, result) => {
        if (err) throw err;
        else callback(result);
    });
}

function deleteOne(data, callback) {
    console.log(data);
    let sql_statement = 'DELETE FROM events WHERE eventId = ?';
    let sql_params = [data];
    statement = db.format(sql_statement, sql_params);
        db.query(statement, function (err) {
        if (err) throw err;
    });
    callback();
}

function getSubs(data, callback) {
    console.log(data);
    let sql_statement = 'SELECT * FROM subEvents';
    statement = db.format(sql_statement);
    db.query(statement, (err, result) => {
        if (err) throw err;
        else callback(result);
    });
}

function addSub(data, callback) {
    console.log('user add sub event fired from db model')
    let subEvent = {
        subEventId: null,
        subEventName: data.new_event_name,
        subEventLocation: data.new_event_location,
        subEventStartDateTime: data.new_event_start_date + " " + data.new_event_start_time,
        subEventEndDateTime: data.new_event_end_date + " " + data.new_event_end_time,
        subEventDescription: data.new_event_description
    };
    console.log(subEvent)
    let sql_statement = 'INSERT INTO subEvents SET ?';
    let sql_params = [subEvent];
    statement = db.format(sql_statement, sql_params);
    db.query(statement, function (err) {
        if (err) throw err;
    });
    callback();
}

function getRatingQuestions(eventId, subEventId, callback) {
    console.log('model hit for stats')
    console.log();
    let sql_statement = 'SELECT * FROM subEvents where subEventId = ?';
    statement = db.format(sql_statement);
    let sql_params = [subEventId];
    statement = db.format(sql_statement, sql_params)
    db.query(statement, (err, result) => {
        if (err) throw err;
        else callback(result[0]);
    });
}

function getRatings(eventId, subEventId, callback) {
    console.log('model hit for stats')
    console.log('sub event id: ' + subEventId);
    let sql_statement = 'SELECT * FROM visit WHERE subEventId = ?';
    let sql_params = [subEventId];
    statement = db.format(sql_statement, sql_params)
    db.query(statement, (err, result) => {
        if (err) throw err;
        else callback(result[0]);
        // else console.log('results: ' + result[0])
    });
}


function getStats(callback) {
    console.log('model hit for stats')
    // console.log(data);
    let sql_statement = 'SELECT AVG(rating1) AS rating1 FROM visit';
    statement = db.format(sql_statement);
    db.query(statement, (err, result) => {
        if (err) throw err;
        else callback(result[0]);
    });
}

function eventScan(data, id, callback) {
    console.log('model hit for event scan: ' + data)
    let event_visit = {
        eventId: data,
        userId: id
    }
    console.log(event_visit)
    let sql_statement = 'INSERT INTO registration SET ?';
    let sql_params = [event_visit];
    statement = db.format(sql_statement, sql_params);
    db.query(statement, function (err) {
        if (err) console.log('error, probably already scanned');
    });
    callback();
}

function subEventScan(subEventId, eventId, id, callback) {
    console.log('model hit for sub event scan: ' + subEventId)
    let sub_event_visit = {
        eventId: eventId,
        subEventId: subEventId,
        userId: id
    }
    console.log(sub_event_visit)
    let sql_statement = 'INSERT INTO visit SET ?';
    let sql_params = [sub_event_visit];
    statement = db.format(sql_statement, sql_params);
    db.query(statement, function (err) {
        if (err) console.log('error, probably already scanned');
    });
    callback();
}

module.exports = {
    login_user: login,
    signup_user: signup,
    check_email: check,
    user_add_event: userAddEvent,
    get_events: getEvents,
    delete_event: deleteOne,
    get_sub_events: getSubs,
    user_add_sub_event: addSub,
    get_stats: getStats,
    event_scan: eventScan,
    sub_event_scan: subEventScan,
    get_rating_questions: getRatingQuestions,
    get_ratings: getRatings
}