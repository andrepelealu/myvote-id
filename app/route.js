module.exports = function(app, passport) {

  // app.get('/', function(req, res){
  //   res.render('home');
  // });

  //========= Login ====================
  // app.get('/login', function(req, res,next){
  //   res.render('login', { message: req.flash('loginMsg') });
  // });

  app.post('/login',function(req, res){
    passport.authenticate('local-login', {
      successRedirect : '/home',
      failureRedirect : '/login',
      failureFlash    : true
})});


  //========= Logout ====================
  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

  //========= Sign Up ====================
  app.get('/signup', function(req, res){
    res.render('signup.ejs', { message: req.flash('signUpMsg') });
  });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile',
    failureRedirect : '/signup',
    failureFlash    : true
  }));

  //========= Profile ====================
  app.get('/profile', isLoggedIn, function(req, res){
      res.render('profile.ejs', { user: req.user });
  });

};

function isLoggedIn(req, res, next) {
  if(req.user) return next();
  res.redirect('/');
}
