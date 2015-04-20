var React = require('react');

var Server = require('../libs/auth.js');
var validator = require('../libs/validations.js');

var navbarSide = React.createClass({

	getInitialState: function () {
	    return {

	    };
	},

	render: function () {
		return (
			<nav>
		      <ul className="navbar-list">
		      	<li>
		          <a href="/admin" className="navbar-link">Dashboard</a>
		        </li>
		        <li>
		          <a href="/admin/pedidos" className="navbar-link">Pedidos</a>
		        </li>
		        <li>
		          <a href="/admin/productos" className="navbar-link">Productos</a>
		        </li>
		        <li>
		          <a href="/admin/clientes" className="navbar-link">Clientes</a>
		        </li>
		        <li>
		          <a href="/admin/cuentas" className="navbar-link">Cuentas</a>
		        </li>
		      </ul>
		      </nav>
		);
	}
});


module.exports = navbarSide;
