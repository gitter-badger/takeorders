var path = require('path');

var app = module.exports = require('./config/express');

// Se llaman las rutas
var routeProducts = require('./routes/products.js');

// Se llama a la ruta que permite el login
var auth = require('./libs/auth.js');


app.use('/auth', auth);
app.use(routeProducts);

app.get('*', function (req, res) {
    return res.sendFile(path.join(__dirname, 'public') + '/index.html');
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

