var server = require('./auth.js');

class Products {
	constructor () {

	}

	static getAll(cb) {
		server.get('/products', function (err, data) {
			cb (err, data)
		})
	}
}

module.exports = Products;
