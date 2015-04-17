var React = require('react');
var request = require('superagent');
var Server = require('../libs/auth.js');


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
      <div className="row">
        <div className="six columns">
          <h4>Hola</h4>
          <p>{this.props.email}</p>
          <button onClick={this.logout}>Logout</button>
        </div>
      </div>
   
    );
  }
});

module.exports = React.createFactory(MyView);