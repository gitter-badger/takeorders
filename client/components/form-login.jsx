var React = require('react');

var formLogin = React.createClass({
	render: function(){
		return (
			<form className="login-form">
				<div>
					<label htmlFor="email">Your email</label>
					<input className="u-full-width" type="email" placeholder="test@mailbox.com" id="email" />
				</div>

				<div>
					<label htmlFor="pass">Password</label>
					<input className="u-full-width" type="password" id="pass" />
				</div>

				<div>
					<input className="button-primary" type="submit" value="Submit" />
				</div>
			</form>
		);
	}
});


module.exports = formLogin;