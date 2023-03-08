const mongoose = require('mongoose');

const Product = mongoose.model('Product', { picture: String , Name: String, price: String , count : String , category : String , weghit : String , desc : String  , createdAt: {type: Date , default: Date.now}});

module.exports = {Product}