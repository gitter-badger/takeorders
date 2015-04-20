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
      <div className="contenedor">
      <nav>
      <ul>
        <li>Home</li>
        <li>Profile</li>
      </ul>
      </nav>
        <div className="flex-column">
          <h4>Hola</h4>
          <p>{this.props.email}</p>
          <button onClick={this.logout}>Logout</button>
          <h2>Lorem</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit autem dolorem expedita aut temporibus iusto blanditiis, suscipit inventore doloribus, placeat, at adipisci. Adipisci molestiae, hic, corrupti mollitia ipsum laboriosam obcaecati!</p>
        </div>
      </div>
   
    );
  }
});

module.exports = React.createFactory(MyView);