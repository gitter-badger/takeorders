var React = require('react/addons');

var ReactTransitionGroup = React.addons.CSSTransitionGroup;

var Server = require('../libs/auth.js');

var Navbar = require('../components/navbar.jsx');
var NavbarSide = require('../components/navbar-side.jsx');
var TableProducts = require('../components/table-products.jsx');

var Products = require('../libs/products.js');

var MyView = React.createClass({
	getInitialState: function () {
			return {
				products: [{}]
			};
	},
	componentDidMount: function() {
		Products.getAll((err, data) => {
			this.setState({products: data.body})
		})
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
				<TableProducts products={this.state.products}/>
				</div>
				</ReactTransitionGroup>
				</div>
			</div>
		);
	}
});

module.exports = React.createFactory(MyView);





