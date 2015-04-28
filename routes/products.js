var mongoose = require('mongoose');
var express = require('express');
var JWT = require('jwt-async');

var Products = require('../models/products.js');
var User = require('../models/user.js');

var router = express.Router();
var Schema = mongoose.Schema;

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

router.get('/products/:id', requireToken, function (req, res) {
	Products.findOne({user: req.user._id, _id: req.params.id}, function (err, prods) {
		User.populate(prods, {path: 'user'}, function (err, prods) {
			if (err) {
				console.log(err)
				err.status = 500;
				return res.status(500).send(err);
			}
			console.log(prods)
			res.send(prods)
		})
	});
});

router.post('/image', function (req, res) {
  console.log(req.body)
  console.log(req.files)
});

router.post('/products', requireToken, function (req, res) {

	var products = new Products({
		user: req.user._id,
		name: req.body.name,
		desc: req.body.desc,
		brand: req.body.brand,
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

router.put('/products/:id', requireToken, function (req, res) {
	Products.findOne({_id: req.params.id}, function (err, pro) {
		pro.user = req.user._id;
		pro.name = req.body.name;
		pro.desc = req.body.desc;
		pro.brand = req.body.brand;
		pro.total = req.body.total;

		pro.save(function (err, dat) {
			if (err) {
				console.log(err)
				err.status = 500;
       return res.status(500).send(err);
     }
     res.send([pro]);
   })
	})
});


router.delete('/products/:id', requireToken, function (req, res) {
	console.log(req.params.id)
	Products.remove({_id: req.params.id}, function (err, pro) {
		if (err) {
			console.log(err)
			err.status = 500;
      return res.status(500).send(err);
    }
    console.log('borrado ok');
    res.send([{_id: req.params.id}])
  })
});


module.exports = router;
