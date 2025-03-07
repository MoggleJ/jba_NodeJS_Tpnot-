const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fullname : {type: String, required: true },
    email: { type: String, unique: true, required: true },
    hashedPassword: { type: String, required: true },
    postalAddress : {type: String, required: false },
});
module.exports = mongoose.model('User', userSchema);