var express = require('express');
var request = require('request')

var router = express.Router();
var dbconnection = require('../../lib/dbconnection/dbconnection');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/uploadJson', function(req, res, next) {
    request({
        url: req.body.url,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body) // Print the json response
        }
    })
    dbconnection.saveBooking();
    res.redirect('/preflight?id=');
});

router.post('/preFlight', function(req, res, next) {
    request({
        url: req.body.url,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body) // Print the json response
        }
    })
    dbconnection.saveBooking();
    res.redirect('/preflight?id=');
});
module.exports = router;
