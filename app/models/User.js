const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const md5 = require('md5');
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');


const USerSchema = new Schema({
  email:{
    type:String,
    unique:true,
    lowercase:true,
    trim:true,
    validate:[validator.isEmail, 'Invalid email address'],
    required:'Plaease provide the email address'
  },
  name:{
    type:String,
    required:'Please provide the name',
    trim:true
  }
});

module.exports = mongoose.model('User', USerSchema);
