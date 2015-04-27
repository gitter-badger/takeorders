var server = require('./auth.js');
var request = require('superagent');

class Products {
	constructor () {

	}

	static getAll(cb) {
		server.get('/products', function (err, data) {
			return cb(err, data);
		})
	}

	static newProduct(ops, cb) {
		if (localStorage.token) {
			request
				.post('/products')
			  	.authBearer(localStorage.token)
			  	.field('name', ops.name)
			  	.field('desc', ops.desc)
			  	.field('total', ops.total)
			  	.field('brand', ops.brand)
			  	.attach('image', ops.image, ops.image.name)
			  	.end((err,res) => {
			    	if (err) {
			    		cb(err);
			    	}
			    	cb(null, res)
			 	})
		} else {
			alert('Para realizar esta accion, debes loguearte');
			page('/');
		}
		// server.post('/products', ops, function (err, data) {
		// 	return cb(err, data);
		// })
	}

	static delete(ops, cb) {
		server.delete('/products/' + ops._id, {}, function (err, data) {
			return cb(err, data);
		})
	}

	static edit(ops, cb) {
		server.put('/products/' + ops._id, ops, function (err, data) {
			return cb(err, data);
		})
	}
}

module.exports = Products;
