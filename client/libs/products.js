var server = require('./auth.js');

class Products {
	constructor () {

	}

	static getAll(cb) {
		server.get('/products', function (err, data) {
			console.log(data.body)
		})
	}
}

module.exports = Products;
