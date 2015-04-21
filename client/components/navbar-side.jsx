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
		          <a href="/admin/products" className="navbar-link">Products</a>
		        </li>
		        <li>
		          <a href="/admin/orders" className="navbar-link">Orders</a>
		        </li>
		        <li>
		          <a href="/admin/customer" className="navbar-link">Customer</a>
		        </li>
		        <li>
		          <a href="/admin/accounts" className="navbar-link">Accounts</a>
		        </li>
		      </ul>
		      </nav>
		);
	}
});


module.exports = navbarSide;
