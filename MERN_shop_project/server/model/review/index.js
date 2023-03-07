const mongoose = require('mongoose');

const Review = mongoose.model('Review', { rating: String , Name: String, email: String , title : String , desc : String, createdBy: String , createdAt: {type: Date , default: Date.now} });

module.exports = {Review}