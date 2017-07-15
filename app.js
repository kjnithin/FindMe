const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const promisify = require('es6-promisify');
const expressValidator = require('express-validator');
const app = express();



const routes = require('./app/routes/index');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(cookieParser());


app.use(session({
  secret: process.env.SECRET,
  key: process.env.KEY,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));


app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname +'/client'));
app.use(express.static(__dirname +'/dist'));

app.get('/', function(req, res) {
  res.sendFile(__dirname+"/client/index.html");
});

app.use('/', routes);


module.exports = app;
