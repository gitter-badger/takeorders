var React = require('react');

var FormLogin = require('../components/form-login.jsx');

var MyView = React.createClass({
  render: () => {
    return (
      <div className="four columns login-form">
        <h4>Login</h4>
        <FormLogin />
      </div>
    );
  }
});

module.exports = React.createFactory(MyView);
