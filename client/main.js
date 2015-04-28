var React = require('react');
var page = require('page');
var Server = require('./libs/auth.js');


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
			React.render(pedidos({email: res.body.email}), content);
		}
	})
});

page('/admin/products', function (ctx) {
	var products = require('./pages/products.jsx');
	Server.get('/auth/user', (err, res) => {
		if (err) {
			console.log(err)
			page('/');
		} else {
			React.render(products({email: res.body.email}), content);
		}
	})
});

page('/admin/products/add', function (ctx) {
	var productsAdd = require('./pages/products-add.jsx');
	Server.get('/auth/user', (err, res) => {
		if (err) {
			console.log(err)
			page('/');
		} else {
			React.render(productsAdd({email: res.body.email}), content);
		}
	})
});

page('/admin/products/:id', function (ctx) {
	var id = ctx.params.id;
	var productsEdit = require('./pages/products-edit.jsx');
	Server.get('/products/' + id , (err, res) => {
		if (err) {
			console.log(err)
			page('/');
		} else {
			console.log(res.body)
			React.render(productsEdit({product: res.body}), content);
		}
	})
});

page.start()


