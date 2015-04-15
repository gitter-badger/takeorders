var React = require('react');
var request = require('superagent');
var page = require('page');

page('/', function () {
	var hello = require('./pages/landing.jsx');
	React.render(hello(), document.getElementById('content'));
})

page('/otravista/', function () {
	var otra = require('./pages/otra.jsx');
	React.render(otra({saludo: 'Hola manola'}), document.getElementById('content'));
})

page('/otravista/:algo', function (ctx) {
	var otra = require('./pages/otra.jsx');
	React.render(otra({saludo: ctx.params.algo || 'Hola manola'}), document.getElementById('content'));
})



page.start()


