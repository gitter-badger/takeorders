const React = require('react/addons');

const NavbarSide = require('../components/navbar-side.jsx');
const Navbar = require('../components/navbar.jsx');
const Server = require('../libs/auth.js');

const ReactTransitionGroup = React.addons.CSSTransitionGroup;

var admin = React.createClass({

	getInitialState: function () {

			return {

			};
	},
	logout: function () {
		Server.logout();
	},
	render: function () {
		return (
			<div>
				<Navbar email={this.props.email}/>
			<div className="contenedor">
				<NavbarSide />
				<ReactTransitionGroup transitionName="example" transitionAppear={true}>
				<div className="flex-column">
					<h4>Bienvenido:</h4>
					<p>{this.props.email}</p>
					<button onClick={this.logout}>Logout</button>
				</div>
				</ReactTransitionGroup>
			</div>

	</div>
		);
	}
});

module.exports = React.createFactory(admin);





