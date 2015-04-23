var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductsSchema = new mongoose.Schema({
    user: {type: Schema.ObjectId, ref: 'User'},
    name: {type: String, required: true},
    desc: {type: String},
    total: {type: Number, default: 0},
    image: {type: String}
});

module.exports = mongoose.model('Products', ProductsSchema);
