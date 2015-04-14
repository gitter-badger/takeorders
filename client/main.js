var React = require('react');
var request = require('superagent');
var page = require('page');

page('/', function () {
	var hello = require('./views/landing.jsx');
	React.render(hello(), document.getElementById('content'));
})


page.start()

var server = require('./lib/auth.js');

server.get('/auth', function (err, data) {
	if (err) {
		consol.log(err)
	}
	console.log(data)
});

server.auth('Andres', 'Atencio')

