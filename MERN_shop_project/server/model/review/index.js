const mongoose = require('mongoose');

const Review = mongoose.model('Review', { rating: String , title : String , desc : String , name: String , picture: String , createdBy: String , nameOfProduct: String, createdAt: {type: Date , default: Date.now} });

module.exports = {Review}