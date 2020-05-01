const mongoose = require('mongoose');
const { isEmail } = require('validator');

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    validate: isEmail,
  },
  password: String,

});

module.exports = model('User', UserSchema);
