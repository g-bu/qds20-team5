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
        userPassword: data.password_01
    };
    let sql_statement = 'INSERT INTO users SET ?';
    let sql_params = [user];
    statement = db.format(sql_statement, sql_params);
    db.query(statement, function (err) {
        if (err) throw err;
    });
}

module.exports = {
    login_user: login,
    signup_user: signup,
    check_email: check,
}