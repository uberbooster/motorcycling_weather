module.exports = function (server, passport){
  server.get('/', function(req,res){
    res.render('index.ejs');
  });

  server.get('/login' , function(req,res){
    res.render('login.ejs', {message: req.flash('loginMessage')});
  });
  server.get('/signup', function(req,res) {
  res.render('signup.ejs', {message: req.flash('signupMessage')});
});

  server.get('/profile', isLoggedIn,function(req,res){
    res.render('profile.ejs', {
      user:req.user
    });
  });
  server.get('/logout',function(req,res){
    req.logout();
    res.redirect('/');
  });

server.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

    // the callback after google has authenticated the user
  server.get('/auth/google/callback',
            passport.authenticate('google', {
                    successRedirect : '/profile',
                    failureRedirect : '/'
            }));


server.post('/signup', passport.authenticate('local-signup', {
      successRedirect : '/profile', // redirect to the secure profile section
      failureRedirect : '/signup', // redirect back to the signup page if there is an error
      failureFlash : true
  }), function(req, res){
    console.log(req);
  });
server.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
function isLoggedIn(req,res,next){
  if(req.isAuthenticated())
  return next();
  res.redirect('/');


};
};
