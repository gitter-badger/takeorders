var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var express = require('express');
var multer  = require('multer');
var logger = require('morgan');
var path = require('path');

// Se inician los modelos
require('../config/db.js');

// Se llama a la ruta que permite el login
var auth = require('../libs/auth.js');

// Se llaman las rutas
var routeProducts = require('../routes/products.js');

// Seteo de middleware
var app = express();
app.set('views', path.join(__dirname , '../views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(multer({ dest: '../uploads/'}))
app.use(bodyParser.json());
app.use(methodOverride());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));


app.use('/auth', auth);
app.use(routeProducts);
app.get('*', function (req, res) {
    return res.sendFile(path.join(__dirname, '../public') + '/index.html')
})



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
