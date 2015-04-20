var React = require('react');
var Navbar = require('../components/navbar.jsx');

var MyView = React.createClass({
  render: function () {
    return (
    	<div>
			<Navbar />
      <div className="row">
        <div className="six columns">
          <h4>Soy otra vista</h4>
          <p>{this.props.saludo}</p>
        </div>
      </div>
      </div>

    );
  }
});

module.exports = React.createFactory(MyView);
