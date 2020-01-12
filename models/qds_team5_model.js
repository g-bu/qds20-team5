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

function getStats(callback) {
    console.log('model hit for stats')
    // console.log(callback);
    let sql_statement = 'SELECT * FROM visit';
    statement = db.format(sql_statement);
    db.query(statement, (err, result) => {
        if (err) throw err;
        else callback(result);
    });
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
    get_stats: getStats
}