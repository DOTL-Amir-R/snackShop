const mongoose = require('mongoose');

const User = mongoose.model('User', { email: String , password: String , createdAt: {type: Date , default: Date.now}});

module.exports = {User}