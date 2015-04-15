var React = require('react');
var Server = require('../libs/auth.js')

var formLogin = React.createClass({

	getInitialState: function () {
	    return {
	        email: 'Andres',
	        pass: ''  
	    };
	},

	handleChange: function (event) {
		
		this.setState({email: event.target.value})
		console.log('inuput -----> ')
		console.log(event)
	},

	login: function () {
		
		
	},

	render: function(){
		return (
			<div className="eight columns">
				<form>
					<div className="row">
						<label for="email">Your email</label>
						<input class="u-full-width" type="email" placeholder="test@mailbox.com" name="email" value={this.state.email} onChange={this.handleChange} />
					</div>
					<div className="row">
						<label for="email">Password</label>
						<input class="u-full-width" type="password" id="pass" />
					</div>
					<div className="row">
						<input class="button-primary" type="submit" value="Submit" />
					</div>

				</form>
				<div>
					<h2>{this.state.email}</h2>
				</div>
			</div>
			);
	}
});


module.exports = formLogin;