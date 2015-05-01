var React = require('react');
var request = require('superagent');

var Navbar = require('../components/navbar.jsx');

var MyView = React.createClass({
	componentWillMount: function () {
	    request.get('/auth/verify/' + this.props.code).end((err, res) => {
        console.log(err)
        console.log(res)
      })
	},
  render: function () {
    return (
    	<div>
    	<Navbar />
      <div className="row">
        <div className="six columns">
          <h4>Cuenta verificada</h4>
          <p>{this.props.code}</p>
        </div>
      </div>
   	 	</div>
    );
  }
});

module.exports = React.createFactory(MyView);
