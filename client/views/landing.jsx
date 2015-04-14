var React = require('react');

var FormLogin = require('../components/form-login.jsx');

var MyView = React.createClass({
  render: function(){
    return (
      <div className="row">
        <div className="six columns">
          <h4>Login</h4>
        </div>
        <FormLogin />
        <a href="/otravista">Ir a otra vista</a>
      </div>
   
    );
  }
});

module.exports = React.createFactory(MyView);