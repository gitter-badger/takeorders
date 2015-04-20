var React = require('react');
var page = require('page');
var Server = require('./libs/auth.js');

var content = document.getElementById('content');

page('*', function(ctx,  next){
  if (ctx.init) {
    next();
  } else {
    content.classList.add('transition');
    setTimeout(function(){
      content.classList.remove('transition');
      next();
    }, 300);
  }
})

page('/', function () {
	var hello = require('./pages/landing.jsx');
	React.render(hello(), content);
})

page('/otravista/', function () {
	var otra = require('./pages/otra.jsx');
	React.render(otra({saludo: 'Hola manola'}), content);
})

page('/verify/:code', function (ctx) {
	var verify = require('./pages/verify.jsx');
	React.render(verify({code: ctx.params.code || 'Sin codigo'}), content);
})

page('/admin', function (ctx) {
	var admin = require('./pages/admin.jsx');
	Server.get('/auth/user', (err, res) => {
		if (err) {
			console.log(err)
			page('/');
		} else {
			React.render(admin({email: res.body.email}), content);
		}
	})
});

page('/admin/pedidos', function (ctx) {
	var pedidos = require('./pages/pedidos.jsx');
	Server.get('/auth/user', (err, res) => {
		if (err) {
			console.log(err)
			page('/');
		} else {
			React.render(pedidos(), content);
		}
	})
});

page.start()


