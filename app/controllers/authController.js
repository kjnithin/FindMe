const passport = require('passport'),
LocalStrategy = require('passport-local').Strategy;
const crypto = require('crypto');
const mongoose = require('mongoose');
const User = mongoose.model('User');

 passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  function(email, password, done) {
    User.findOne({ 'email': email }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      else{
        return done(null, user);
      }
    });
  }
));

passport.serializeUser(function(user, done) {
   done(null, user.id);
 });

 passport.deserializeUser(function(id, done) {
   User.findById(id, function(err, user) {
     done(err, user);
   });
 });

 const login = function(req,res,next){
   passport.authenticate('local',
     function(err,user,info) {
       if(err) {
         res.json(err);
         return;
       }
       if(!user){
         return res.status(401).json({
           success:false,
           message:'unauthorised user'
         });
       }

       req.login(user,function(err){
         if(err){
           return next(err);
         }
          res.status(200).json(user);
       })
   })(req,res,next);
 };


 const logout = (req,res) =>{
  req.logout();
  res.status(200).json({
    success:true,
    message:'successfully Logged out'
  });
};

const isLoggedIn = (req,res,next) =>{
  if(req.isAuthenticated()){
    next();
    return;
  }else{
    res.status(401).json({
      success:false,
      message:'unauthorised user'
    });
  }
}


 module.exports ={
   login : login,
   logout : logout,
   isLoggedIn : isLoggedIn
 }
