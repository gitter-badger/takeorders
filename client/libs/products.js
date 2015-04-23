var server = require('./auth.js');

class Products {
	constructor () {

	}

	static getAll(cb) {
		server.get('/products', function (err, data) {
			cb (err, data)
		})
	}

	static newProduct(ops, cb) {
		server.post('/products', ops, function (err, data) {
			return cb(err, data)
		})
	}

	static delete(ops, cb) {
		server.delete('/products/' + ops._id, {}, function (err, data) {
			return cb(err, data);
		})
	}
}

module.exports = Products;
