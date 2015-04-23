var mongoose = require('mongoose');
var mockgoose = require('mockgoose');

var mongo_url = process.env.MONGO_URI || process.env.MONGOLAB_URI;

if (!mongo_url) {
	mockgoose(mongoose);
	mockgoose.reset();
	mongo_url = 'mongodb://localhost/hola';
}

mongoose.connect(mongo_url);

module.exports = mongoose.connection;
