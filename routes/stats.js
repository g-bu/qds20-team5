const stats_controller = require('../controllers/stats_controller');
const express = require('express');
const router = express.Router();

router.post('/get_sub_event_stats', function (req, res) {
    console.log('sssssssssssub event id: ' + req.body.hidden_sub_event_input);
    // let q1, q2, q3, q4, q5, r1, r2, r3, r4, r5
    // stats_controller.get_rating_questions(req.body.hidden_event_input, req.body.hidden_sub_event_input, function(stats_data) {
    //     console.log(stats_data)
    //     q1 = stats_data.subEventRating1
    //     q2 = stats_data.subEventRating2
    //     q3 = stats_data.subEventRating3
    //     q4 = stats_data.subEventRating4
    //     q5 = stats_data.subEventRating5
    //     console.log('ddddddddddddddddddddd:' + req.body.hidden_sub_event_input)
    //     stats_controller.get_ratings(req.body.hidden_event_input, req.body.hidden_sub_event_input, function(stats_data) {
    //         console.log(stats_data)
    //         r1 = stats_data.rating1
    //         r2 = stats_data.rating2
    //         r3 = stats_data.rating3
    //         r4 = stats_data.rating4
    //         r5 = stats_data.rating5
            res.render('stats', { 'q1': 'Would you suggest this to a friend?', 'q2': 'How did you like this feature presentation?', 'q3': 'Was this presentation the main reason you came to ...', 'q4': 'How would you rate this presentation out of 5?', 'q5': 'Was this presentation the main reason you came to ...', 'r1': 3.1, 'r2': 2.7, 'r3': 4.4, 'r4': 1.2, 'r5': 3.9 })
        })
         // res.render('stats', { 'rating1': stats_data.rating1)
        // count = 0;
        // sum = 0;
        // for (i=0; i<event_data.length; i++) {
        //     console.log(event_data[i].rating1);
        //     count++;
        //     sum+=event_data[i].rating1;
        // }
        // console.log("Average = " + sum/count);
        // res.render('stats', { 'emailData': req.session.userEmail, 'average': count, 'eventList': event_data, 
        // 'emailData': req.session.userEmail, 'messageData': 'Welcome to QDS Team 5' })
    // })
        // res.render('sub_event_scanner', { 'subEventId': req.body.hidden_event_input, 'emailData': req.session.userEmail, 'messageData': 'EventId #' + req.body.hidden_event_input });
    // })
// })

module.exports = router;
