var React = require('react');
var page = require('page');
var Server = require('./libs/auth.js')

page('/', function () {
	var hello = require('./pages/landing.jsx');
	React.render(hello(), document.getElementById('content'));
})

page('/otravista/', function () {
	var otra = require('./pages/otra.jsx');
	React.render(otra({saludo: 'Hola manola'}), document.getElementById('content'));
})

page('/verify/:code', function (ctx) {
	var verify = require('./pages/verify.jsx');
	React.render(verify({code: ctx.params.code || 'Sin codigo'}), document.getElementById('content'));
})

page('/admin', function (ctx) {
	var admin = require('./pages/admin.jsx');
	Server.get('/auth/user', (err, res) => {
		if (err) {
			console.log(err)
			page('/');
		} else {
			React.render(admin({email: res.body.email}), document.getElementById('content'));
		}
	})
})

page.start()


