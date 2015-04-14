var React = require('react');
var request = require('superagent');

var hello = require('./views/landing.jsx');

React.render(hello(), document.getElementById('content'));

request
	.get('http://snapi.aws.af.cm/informante')
	.end(function(err, res){
	   console.log(res.body)
	   console.log(err)
	});