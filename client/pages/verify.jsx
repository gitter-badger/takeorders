var React = require('react');
var request = require('superagent');

var MyView = React.createClass({
	getInitialState: function () {
	    request.get('/auth/verify/' + this.props.code).end((err, res) => {
        console.log(err)
        console.log(res)
      })
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