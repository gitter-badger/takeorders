var express = require('express');
var router = express.Router();

// router.get('/auth', function (req, res) {
// 	console.log(req.headers)
// 	res.sendStatus(200)
// });

router.post('/login', function (req, res) {
	console.log(req.body)
	res.send({email:req.body.email, pass:req.body.pass})
})

module.exports = router;
