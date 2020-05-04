const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { secret } = require('../config');
const User = require('../models/User');

// Setup options for JwT
const jwtOptions = {
  // Look specifically from the header where it's called authorization
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: secret,
};

// Create JWT Strategy for handling JWT
const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
  // See if the user ID in the payload exists in our database
  //  If it does, call 'done' with that user
  //  otherwise, call done without a user object
  try {
    const user = await User.findById(payload.sub);
    if (user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (e) {
    return done(e, false);
  }
});


passport.use(jwtLogin);
