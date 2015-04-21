var React = require('react');

var navbar = React.createClass({

	getInitialState: function () {
	    return {
			usuario: '/usuario/' + this.props.email
	    };
	},

	render: function () {
		return (
			<nav className="navbar">
		      <div className="container">
		        <ul className="navbar-list">
		          <li className="navbar-item">
		            <h1 className="navbar-brand">Take Orders</h1>
		          </li>
		          <li className="navbar-item">
		            <a href="/" className="navbar-link">Home</a>
		          </li>
		          <li className="navbar-itemr">
		            <a href={this.state.usuario} className="navbar-link">{this.props.email}</a>
		          </li>
		        </ul>
		      </div>
		    </nav>
		);
	}
});


module.exports = navbar;
