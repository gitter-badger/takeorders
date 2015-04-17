var React = require('react');
var Server = require('../libs/auth.js');
var page = require('page');

var formLogin = React.createClass({

	getInitialState: function () {
	    return {
	        email: '',
	        pass: '',
	        logueo: ''  
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
		Server.login(this.state.email, this.state.pass, (err, data) => {
			if (err) {
				this.setState({logueo: 'ERROR'});
			} else {
				this.setState({logueo: 'OK'});
				page('/admin');
			}
		});

	},

	render: function () {
		return (
			<form className="login-form">
				<div>
					<label htmlFor="email">Your email</label>
					<input className="u-full-width" type="email" placeholder="test@mailbox.com" id="email" onChange={this.handleInputEmail}/>
				</div>

				<div>
					<label htmlFor="pass">Password</label>
					<input className="u-full-width" type="password" id="pass" onChange={this.handleInputPass}/>
				</div>

				<div>
					<input className="button-primary" type="submit" value="Login" onClick={this.login}/>
				</div>
				<div>
					<h1>{this.state.logueo}</h1>
				</div>
			</form>
		);
	}
});


module.exports = formLogin;