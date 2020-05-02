const mongoose = require('mongoose');
const { isEmail, isLength } = require('validator');
const bcrypt = require('bcryptjs');

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
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.pre('save', async function(next) {
  // gets access to the user model that is currently being saved
  const user = this;
  let salt;
  let hash;
  // Gn
  try {
    salt = await bcrypt.genSalt();
    hash = await bcrypt.hash(user.password, salt);
  } catch (e) {
    // Call save with an error
    next(e);
  }
  console.log(salt);
  console.log(hash);
  // overwrite the plain text password with our hash
  user.password = hash;
  // Finally call save
  next();
});

module.exports = model('User', UserSchema);
