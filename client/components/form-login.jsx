var React = require('react');

var formLogin = React.createClass({

	getInitialState: function () {
	    return {
	        counter: 0  
	    };
	},

	increment: function () {
		this.setState({counter: this.state.counter + 1 })
	
	},

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
				<div>
					<h2>{this.state.counter}</h2>
				</div>
				<button onClick={this.increment}>Increment!</button>
			</div>
			);
	}
});


module.exports = formLogin;