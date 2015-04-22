var React = require('react');

var Server = require('../libs/auth.js');
var validator = require('../libs/validations.js');

var formLogin = React.createClass({

	getInitialState: function () {
	    return {
	        email: '',
	        pass: '',
	        verify: ''
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
		if (validator.email(this.state.email)) {
			console.log(this.state.email)
			Server.register(this.state.email, this.state.pass, (err, data) => {
			this.setState({verify: '/verify/' + data})
		})
		} else {
			alert('El email no es valido');
		}


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
					<input className="button-primary" type="submit" value="Register" onClick={this.login}/>
				</div>
				<div>
					<a href={this.state.verify} >{this.state.verify}</a>
				</div>
			</form>
		);
	}
});


module.exports = formLogin;
