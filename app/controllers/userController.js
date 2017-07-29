const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify')
const winston = require('../handlers/winston');

const userValidation = (req,res,next)=>{
  req.sanitizeBody('name');
  req.checkBody('name','Please provide the name').notEmpty();
  req.checkBody('email','Please provide the valid email').notEmpty();
  req.sanitizeBody('email').normalizeEmail({
    remove_dots:false,
    remove_extension: false,
    gamil_remove_subaddress:false
  });
  req.checkBody('password','Please provide the password').notEmpty();
  req.checkBody('passwordConfirm','Please provide the password').notEmpty();
  req.checkBody('passwordConfirm','Password did not match').equals(req.body.password);

  const error = req.validationErrors();
  if(error){
     res.status(401).json(error);
  }else{
    next();
  }
}

const register = async(req,res,next) =>{
  try{
    const user = new User({email:req.body.email,name:req.body.name});
    const registerUser = promisify(User.register,User);
    await registerUser(user,req.body.password);
    next();
  }
  catch(err){
    res.status(401).json({
      success:false,
      message: err.message
    });
      winston.log.error(err);
  }
};

const updateUser = async(req,res)=>{
  try{
    const user = await User.findOneAndUpdate(
      {_id:req.params.id},
       req.body,
        {
        new: true,
        runValidators: true
      });
      res.status(200).json(user);
  }
  catch(err){
    res.status(400).json({
      success:false,
      message:'update failed',
      error:err
    });
    winston.log.error(err);
  }
};

const googleAuth = async(req,res)=>{
  try{
    const user = await User.findOne({'email':req.body.email});
    if(!user) return next();
    res.status(200).json(user);
  }
  catch(err){
    res.status(401).json({
      success:false,
      message:'Authentication failed',
      error:err
    });
    winston.log.error(err);
  }
};

module.exports ={
  userValidation : userValidation,
  register : register,
  updateUser : updateUser,
  googleAuth : googleAuth
}
