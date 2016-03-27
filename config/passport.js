var LocalStrategy   = require('passport-local').Strategy;

// load up the user model
var User = require('../app/models/user');

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

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
        // console.log(req)
        console.log(email)
        console.log(password)
    }));
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
