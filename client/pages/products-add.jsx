var React = require('react/addons');

var ReactTransitionGroup = React.addons.CSSTransitionGroup;

var Server = require('../libs/auth.js');
var Navbar = require('../components/navbar.jsx');
var NavbarSide = require('../components/navbar-side.jsx');
var FormProducts = require('../components/form-products.jsx');

var MyView = React.createClass({
	render: function () {
		return (
			<div>
				<Navbar email={this.props.email}/>
				<div className="contenedor">
				<NavbarSide />
				<ReactTransitionGroup transitionName="example" transitionAppear={true}>
				<div className="flex-column">
				<h4>Productos</h4>
				<FormProducts />
				</div>
				</ReactTransitionGroup>
				</div>
			</div>
		);
	}
});

module.exports = React.createFactory(MyView);
