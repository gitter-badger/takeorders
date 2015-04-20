var React = require('react');

var Navbar = require('../components/navbar.jsx');
var FormLogin = require('../components/form-login.jsx');
var FormRegister = require('../components/form-register.jsx');

var MyView = React.createClass({
  render: () => {
    return (
    	<div>
		<Navbar />
      <div className="row">
        <div className="row">
			<div className="six columns">
				<h3>Login</h3>
				<FormLogin />
			</div>
			<div className="six columns">
				<h3>Register</h3>
				<FormRegister />
			</div>
        </div>
      </div>
      </div>
    );
  }
});

module.exports = React.createFactory(MyView);
