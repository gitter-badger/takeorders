var React = require('react/addons');

var ReactTransitionGroup = React.addons.CSSTransitionGroup;

var Server = require('../libs/auth.js');

var Navbar = require('../components/navbar.jsx');
var NavbarSide = require('../components/navbar-side.jsx');
var Products = require('../libs/products.js');

var MyView = React.createClass({
	getInitialState: function () {
			Products.getAll(function (err, data){
				console.log(data.body)
			});
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
				<h4>Productos</h4>
				<p>Aun no hay productos cargados</p>
				</div>
				</ReactTransitionGroup>
				</div>
			</div>
		);
	}
});

module.exports = React.createFactory(MyView);





