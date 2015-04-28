var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var express = require('express');
var multer  = require('multer');
var logger = require('morgan');
var path = require('path');

// Se inician los modelos
require('../config/db.js');

// Seteo de middleware
var app = module.exports = express();

app.set('views', path.join(__dirname , '../views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(multer({ dest: '../uploads/'}))
app.use(bodyParser.json());
app.use(methodOverride());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
