var React = require('react');

var FormLogin = require('../components/form-login.jsx');

var MyView = React.createClass({
  render: function(){
    return (
      <div className="four columns login-form">
        <h4>Login</h4>
        <FormLogin />
        <a href="/otravista/sarasa">Ir a otra vista</a>
      </div>
    );
  }
});

module.exports = React.createFactory(MyView);

<div className>

</div>
