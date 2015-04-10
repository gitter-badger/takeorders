var React = require('react');

var formLogin = React.createClass({
	render: function(){
		return (
			<div className="six columns">
				<form>
					<div className="row">
						<label for="email">Your email</label>
						<input class="u-full-width" type="email" placeholder="test@mailbox.com" id="email" />
					</div>
					<div className="row">
						<label for="email">Password</label>
						<input class="u-full-width" type="password" id="pass" />
					</div>
					<div className="row">
						<input class="button-primary" type="submit" value="Submit" />
					</div>
				</form>
			</div>

			);
	}
});


module.exports = formLogin;