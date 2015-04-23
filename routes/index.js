var express = require('express');
var router = express.Router();

var Products = require('../models/products.js');
var User = require('../models/user.js');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JWT = require('jwt-async');
var jwt = new JWT({
	crypto: {
		algorithm: 'HS512',
		secret: process.env.TOKEN_SECRET || "NOT A SECRET AT ALL, YOU SHOULD TOTES CHANGE IT"
	}
});


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
	Products.find({user: req.user._id}, function (err, prods) {
		User.populate(prods, {path: 'user'}, function (err, prods) {
			if (err) {
				console.log(err)
				err.status = 500;
				return res.status(500).send(err);
			}
			res.send(prods)
		})
	});
});

router.post('/products', requireToken, function (req, res) {

	var products = new Products({
		user: req.user._id,
		name: req.body.name,
		desc: req.body.desc,
		total: req.body.total
	});

	products.save(function(err, u) {
		console.log(u)
		console.log(err)
		if (err) {
			console.log(err)
			err.status = 500;
      		return res.status(500).send(err);
		}
		console.log('Guardado ok')
		return res.send([req.body]);
	});

});


module.exports = router;
