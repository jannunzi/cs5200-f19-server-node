const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    salary: Number,
    dob: Date
}, {collection: 'users'});

module.exports = userSchema