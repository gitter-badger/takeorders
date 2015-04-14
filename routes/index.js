var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/auth', function (req, res) {
	console.log(req.headers)
	res.sendStatus(200)
});

module.exports = router;
