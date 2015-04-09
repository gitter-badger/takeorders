var React = require('react');

class Landing {
  constructor(name) {
    this.name = name;
  }
  hello() {
    return 'Hello, ' + this.name;
  }
  static helloForConsole() {
    return console.log('Hello =) ');
  }
}


var MyView = React.createClass({
  render: function(){
    return (
      <div>
      	<p>Coming soon</p>
      </div>
    );
  }
});

var testBabel = new Landing('fruta');

Landing.helloForConsole();

module.exports = React.createFactory(MyView);