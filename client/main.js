var React = require('react');
var request = require('superagent');

var hello = require('./views/landing.jsx');

React.render(hello(), document.getElementById('content'));

request
	.post('/login')
	.send(data)
	.end(function(err, res){
	   console.log(res)
	   console.log(err)
	});