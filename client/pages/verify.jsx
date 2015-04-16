var React = require('react');

var MyView = React.createClass({
	getInitialState: function () {
	    
	    return {
	          
	    };
	},
  render: function () {
    return (
      <div className="row">
        <div className="six columns">
          <h4>Cuenta verificada</h4>
          <p>{this.props.code}</p>
        </div>
      </div>
   
    );
  }
});

module.exports = React.createFactory(MyView);