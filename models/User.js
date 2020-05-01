const mongoose = require('mongoose');
const { isEmail, isLength } = require('validator');

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    validate: isEmail,
    required: [true, 'You must provide an email address'],
  },
  password: {
    type: String,
    required: [true, 'You must provide a password'],
    validate: (value) => isLength(value, { min: 6 }),
  },
});

module.exports = model('User', UserSchema);
