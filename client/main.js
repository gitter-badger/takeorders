const React = require('react');
const page = require('page');

const Server = require('./libs/auth.js');

page('/', function () {
	let hello = require('./pages/landing.jsx');
	React.render(hello(), content);
})

page('/verify/:code', function (ctx) {
	let verify = require('./pages/verify.jsx');
	React.render(verify({code: ctx.params.code || 'Sin codigo'}), content);
})

page('/admin', function (ctx) {
	let admin = require('./pages/admin.jsx');
	Server.get('/auth/user', (err, res) => {
		if (err) {
			page('/');
		} else {
			React.render(admin({email: res.body.email}), content);
		}
	})
});

page('/admin/pedidos', function (ctx) {
	let pedidos = require('./pages/pedidos.jsx');
	Server.get('/auth/user', (err, res) => {
		if (err) {
			page('/');
		} else {
			React.render(pedidos({email: res.body.email}), content);
		}
	})
});

page('/admin/products', function (ctx) {
	let products = require('./pages/products.jsx');
	Server.get('/auth/user', (err, res) => {
		if (err) {
			page('/');
		} else {
			React.render(products({email: res.body.email}), content);
		}
	})
});

page('/admin/products/add', function (ctx) {
	let productsAdd = require('./pages/products-add.jsx');
	Server.get('/auth/user', (err, res) => {
		if (err) {
			page('/');
		} else {
			React.render(productsAdd({email: res.body.email}), content);
		}
	})
});

page('/admin/products/:id', function (ctx) {
	let id = ctx.params.id;
	let productsEdit = require('./pages/products-edit.jsx');
	Server.get('/products/' + id , (err, res) => {
		if (err) {
			page('/');
		} else {
			React.render(productsEdit({product: res.body}), content);
		}
	})
});

page.start();


