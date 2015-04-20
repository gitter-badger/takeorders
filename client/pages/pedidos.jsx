var React = require('react/addons');
var ReactTransitionGroup = React.addons.CSSTransitionGroup;
var request = require('superagent');
var Server = require('../libs/auth.js');

var Navbar = require('../components/navbar.jsx');
var NavbarSide = require('../components/navbar-side.jsx');

var MyView = React.createClass({
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
          <h4>Pedidos</h4>
        </div>
        </ReactTransitionGroup>
      </div>
    	</div>
    );
  }
});

module.exports = React.createFactory(MyView);
