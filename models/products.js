var mongoose = require('mongoose');
var ShortId = require('shortid');

var Schema = mongoose.Schema;

var ProductsSchema = new mongoose.Schema({
    _id: { type: String, unique: true, 'default': ShortId.generate },
    user: {type: Schema.ObjectId, ref: 'User'},
    name: {type: String, required: true},
    brand: {type: String, required: true},
    desc: {type: String},
    total: {type: Number, default: 0},
    image: {type: String}
});

module.exports = mongoose.model('Products', ProductsSchema);
