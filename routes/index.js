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

router.post('/login', function (req, res) {
	res.send({email:req.body.email, pass:req.body.pass})
})

module.exports = router;
