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
      </div>
   
    );
  }
});

module.exports = React.createFactory(MyView);