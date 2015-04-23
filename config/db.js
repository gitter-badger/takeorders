var mongoose = require('mongoose');
var mockgoose = require('mockgoose');

var mongo_url = process.env.MONGO_URI ||  'mongodb://takeorders:takeorders@ds061258.mongolab.com:61258/takeorders';

if (!mongo_url) {
	mockgoose(mongoose);
	//mockgoose.reset();
	mongo_url = 'mongodb://localhost/hola';
}

mongoose.connect(mongo_url);

module.exports = mongoose.connection;
