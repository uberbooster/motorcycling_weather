var LocalStrategy   = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// load up the user model
var User = require('../app/models/user');
var configAuth = require('../config/auth.js');

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
    passport.use(new GoogleStrategy({

        clientID        : configAuth.googleAuth.clientID,
        clientSecret    : configAuth.googleAuth.clientSecret,
        callbackURL     : configAuth.googleAuth.callbackURL,

    },
    function(token, refreshToken, profile, done) {

        // make the code asynchronous
        // User.findOne won't fire until we have all our data back from Google
        process.nextTick(function() {

            // try to find the user based on their google id
            User.findOne({ 'google.id' : profile.id }, function(err, user) {
                if (err)
                    return done(err);

                if (user) {

                    // if a user is found, log them in
                    return done(null, user);
                }else {
                    // if the user isnt in our database, create a new user
                    var newUser = new User();

                    // set all of the relevant information
                    newUser.google.id    = profile.id;
                    newUser.google.token = token;
                    newUser.google.name  = profile.displayName;
                    newUser.google.email = profile.emails[0].value; // pull the first email

                    // save the user
                    newUser.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, newUser);
                      });
                  }
              });
          });

      }));
    passport.use('local-signup', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // pass back the entire request to the callback
    },
    function(req, email, password, done) {
        process.nextTick(function() {

        User.findOne({ 'local.username' :  email }, function(err, user) {

            if (err)
                return done(err);
            // check  if  already a user
            if (user) {
                return done(null, false, req.flash('signupMessage', 'user already exist.'));
            } else {

                var newUser = new User();
                newUser.local.username = email;
                newUser.local.password = newUser.generateHash(password);

                newUser.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
            }

        });

        });
      }));


        // console.log(req)
        // console.log(email)
        // console.log(password)
    //
    passport.use('local-login', new LocalStrategy({
        usernameField : 'email',

        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, email, password, done) {
        User.findOne({ 'local.username' :  email }, function(err, user) {

            if (err)
                return done(err);

            // if no user is found, return the message
            if (!user)
                return done(null, false, req.flash('loginMessage', 'No user found.'));
            // if the user is found but the password is wrong
            if (!user.validPassword(password))
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong email or password.'));
            // all is well, return successful user
            return done(null, user);
          });

      }));

  };




// var LocalStrategy = require ('passport -local').Strategy;
// var user = require('../js/user');
// module.exports = function(passport){
//   passport.serializeUser(function(user,done){
//     done(null,user.id);
//   });
//
//   passport.deserializeUser(function(id,done){
//     User.findById(id, function(err, user){
//       done(err, user);
//     });
//   });
//
//   passport.use('local-signup', newLocalStrategy({
//     usernameField:'email',
//     passwordField:'password',
//     passReqToCallback:true
//   },
//   function(req, email, password, done){
//     process.nextTick(function(){
//       User.findOne{'local.username':email}, function(err, user){
//         if(err)
//         return done(err);
//         if(user){
//           return done(null, false, req.flash('signupMessage', 'This email already exist'));
//         }
//         else{
//           var newUser = new User();
//           newUser.local.username=email;
//           newUser.local.password = password;
//           newUser.save(function(err){
//             if(err) throw err;
//             return done(null, newUser);
//           })
//         }
//       })
//     });
//   }
// ))
// }
