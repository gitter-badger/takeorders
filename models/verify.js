var Relation = require('mongoose-type-relation');
var mongoose = require('mongoose');

function generateCode(){
	return Math.random().toString(36).slice(-8);
}


var VerifySchema = new mongoose.Schema({
    user: [{type: Relation , required:true, ref: 'User'}],
    code: {type: String, default: generateCode}
});

module.exports = mongoose.model('Verify', VerifySchema);
