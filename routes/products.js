var debug = require('debug')('Route products');
var mongoose = require('mongoose');
var express = require('express');

var Products = require('../models/products.js');
var User = require('../models/user.js');
var auth = require('../libs/auth.js');

var router = module.exports = express.Router();

router.get('/products', auth.requireToken, function (req, res) {
	Products.find({user: req.user._id}, function (err, prods) {
		User.populate(prods, {path: 'user'}, function (err, prods) {
			if (err) {
				err.status = 500;
				return res.status(500).send(err);
			}
			res.send(prods)
		})
	});
});

router.get('/products/:id', auth.requireToken, function (req, res) {
	Products.findOne({user: req.user._id, _id: req.params.id}, function (err, prods) {
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

router.post('/products', auth.requireToken, function (req, res) {

	var products = new Products({
		user: req.user._id,
		name: req.body.name,
		desc: req.body.desc,
		brand: req.body.brand,
		total: req.body.total
	});

	products.save(function(err, u) {
		if (err) {
			err.status = 500;
      return res.status(500).send(err);
    }
    return res.send([req.body]);
  });

});

router.put('/products/:id', auth.requireToken, function (req, res) {
	Products.findOne({_id: req.params.id}, function (err, pro) {
		pro.user = req.user._id;
		pro.name = req.body.name;
		pro.desc = req.body.desc;
		pro.brand = req.body.brand;
		pro.total = req.body.total;

		pro.save(function (err, dat) {
			if (err) {
				err.status = 500;
       return res.status(500).send(err);
     }
     res.send([pro]);
   })
	})
});


router.delete('/products/:id', auth.requireToken, function (req, res) {
	Products.remove({_id: req.params.id}, function (err, pro) {
		if (err) {
			console.log(err)
			err.status = 500;
      return res.status(500).send(err);
    }
    res.send([{_id: req.params.id}])
  })
});
