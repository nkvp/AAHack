var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/preflight', function(req, res, next) {
    var session = req.session;
    res.render('preflight', { id: request.query.id });
});


module.exports = router;
