var React = require('react');
var request = require('superagent');
var Server = require('../libs/auth.js');


var MyView = React.createClass({
	getInitialState: function () {

	    return {

	    };
	},
  logout: function () {
    Server.logout();
  },
  render: function () {
    return (
      <div className="contenedor">
      <nav>
      <ul className="navbar-list">
        <li>
          <a href="/admin/pedidos" className="navbar-link">Pedidos</a>
        </li>
        <li>
          <a href="/admin/productos" className="navbar-link">Productos</a>
        </li>
        <li>
          <a href="/admin/clientes" className="navbar-link">Clientes</a>
        </li>
        <li>
          <a href="/admin/cuentas" className="navbar-link">Cuentas</a>
        </li>
      </ul>
      </nav>
        <div className="flex-column">
          <h4>Pedidos</h4>
        </div>
      </div>
   
    );
  }
});

module.exports = React.createFactory(MyView);