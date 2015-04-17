var React = require('react');
var request = require('superagent');

var MyView = React.createClass({
	getInitialState: function () {

	    return {

	    };
	},
  render: function () {
    return (
      <div className="row">
        <div className="six columns">
          <h4>Hola</h4>
          <p>{this.props.email}</p>
        </div>
      </div>
   
    );
  }
});

module.exports = React.createFactory(MyView);