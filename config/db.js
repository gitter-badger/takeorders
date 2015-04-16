var mongoose = require('mongoose');

var debug = require('debug')('db');


var mongo_url = process.env.MONGO_URI || process.env.MONGOLAB_URI;

if (!mongo_url){
  var mockgoose = require('mockgoose');
  mockgoose(mongoose);
  mockgoose.reset();
  mongo_url = 'mongodb://localhost/quickstart';
}

mongoose.connect(mongo_url);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	debug('DB abierta')
  	require('../models/user.js');
	// require('../models/verify.js');
});