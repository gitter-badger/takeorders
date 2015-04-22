var React = require('react');

var navbarSide = React.createClass({

	getInitialState: function () {
	    return {

	    }
	},

	render: function () {
		return (
			<nav>
		      <ul className="navbar-list">
		      	<li>
		          <a href="/admin" className="navbar-link">Dashboard</a>
		        </li>
		        <li>
		          <a href="/admin/products" className="navbar-link">Productos</a>
		          <ul className="navbar-list">
			        <li>
			          <a href="/admin/products/add" className="navbar-link">Agregar</a>
			        </li>
			      </ul>
		        </li>
		        <li>
		          <a href="/admin/orders" className="navbar-link">Pedidos</a>
		        </li>
		        <li>
		          <a href="/admin/customer" className="navbar-link">Clientes</a>
		        </li>
		        <li>
		          <a href="/admin/accounts" className="navbar-link">Cuentas</a>
		        </li>
		      </ul>
		      </nav>
		);
	}
});


module.exports = navbarSide;
