var React = require('react');
var Server = require('../libs/auth.js')

var formLogin = React.createClass({

	getInitialState: function () {
	    return {
	        email: '',
	        pass: ''  
	    };
	},

	handleInputEmail: function (event) {
		
		this.setState({email: event.target.value})

	},

	handleInputPass: function (event) {
		
		this.setState({pass: event.target.value})

	},

	login: function (event) {
		event.preventDefault();
		Server.auth(this.state.email, this.state.pass);

	},

	render: function(){
		return (
			<div className="eight columns">
				<form>
					<div className="row">
						<label for="email">Your email</label>
						<input class="u-full-width" type="email" placeholder="test@mailbox.com" value={this.state.email} onChange={this.handleInputEmail} />
					</div>
					<div className="row">
						<label for="email">Password</label>
						<input class="u-full-width" type="password" value={this.state.pass} onChange={this.handleInputPass} />
					</div>
					<div className="row">
						<button onClick={this.login}>Ingresar</button>
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