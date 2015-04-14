var React = require('react');

var MyView = React.createClass({
  render: function(){
    return (
      <div className="row">
        <div className="six columns">
          <h4>Soy otra vista</h4>
          <p>{this.props.saludo}</p>
        </div>
      </div>
   
    );
  }
});

module.exports = React.createFactory(MyView);