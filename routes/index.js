var express = require('express');
var router = express.Router();

var JWT = require('jwt-async');
var jwt = new JWT({
  crypto: {
    algorithm: 'HS512',
    secret: process.env.TOKEN_SECRET || "NOT A SECRET AT ALL, YOU SHOULD TOTES CHANGE IT"
  }
});

// var auth = require('../libs/auth.js');

// router.get('/auth', function (req, res) {
// 	console.log(req.headers)
// 	res.sendStatus(200)
// });

function requireToken (req, res, next){
  var token;
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    token = req.headers.authorization.split(' ')[1];
  }

  if (req.body && req.body.token) {
    token = req.body.token;
  }

  if (!token){
    return res.status(401).send({status: 401,message:'Token not set.'});
  }

  jwt.verify(token, function (err, data) {
    if (err){ return res.status(401).send({status: 401,message: err}); }
    req.user = data.claims.user;
    delete req.user.password;
    next();
  });
};

router.get('/products', requireToken, function (req, res) {
	res.send([{sara: 'connor'}]);
})

module.exports = router;
