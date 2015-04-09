var React = require('react');

var MyView = React.createClass({
  render: function(){
    return (
      <div>
      	<p>Coming soon</p>
      </div>
    );
  }
});


module.exports = React.createFactory(MyView);