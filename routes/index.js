var express = require('express');
var router = express.Router();

var auth = require('../libs/auth.js');

// router.get('/auth', function (req, res) {
// 	console.log(req.headers)
// 	res.sendStatus(200)
// });

router.post('/login', function (req, res) {
	console.log(req.body)
	res.send({email:req.body.email, pass:req.body.pass})
})

router.get('/products', auth.requireToken, function (req, res) {
	res.send([{sara: 'connor'}]);
})

module.exports = router;
