const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({
    name: String,
    username: String,
    email: String,
    password: String
}, { timestamps: true });

//  Create Model from our Schema
const User = mongoose.model('User', userSchema);

// Export Model
module.exports = User;