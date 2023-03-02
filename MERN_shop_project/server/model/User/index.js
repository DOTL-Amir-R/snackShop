const mongoose = require('mongoose');

const User = mongoose.model('User', { email: String , firstName: String, lastName: String , haveAllergy: {type: Boolean , default: false} , password: String , createdAt: {type: Date , default: Date.now}});

module.exports = {User}