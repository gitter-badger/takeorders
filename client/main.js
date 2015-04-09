var React = require('react');
window.React = React;
//var view = require('./views/view.jsx'); // need to specify the jsx extension

var hello = require('./views/landing.jsx');



React.render(hello(), document.getElementById('content'));