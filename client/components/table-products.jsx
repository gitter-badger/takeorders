var React = require('react');

var table = React.createClass({

	getInitialState: function () {
		console.log(this.props.products)
	    return {

	    };
	},

	render: function () {
		return (
			<table className="u-full-width">
				<thead>
				    <tr>
				      <th>Nombre</th>
				      <th>Descripcion</th>
				      <th>Cantidad</th>
				      <th>Accion</th>
				    </tr>
				 </thead>
				 <tbody>
				{this.props.products.map(function (prod) {
					return (<tr>
								<td>{prod.name}</td>
								<td>{prod.desc}</td>
								<td>{prod.total}</td>
								<td><button className="button-primary">Editar</button> <button>Borrar</button></td>
							</tr>)
				})}
				</tbody>
			</table>
		);
	}
});

<table class="u-full-width">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Sex</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dave Gamache</td>
      <td>26</td>
      <td>Male</td>
      <td>San Francisco</td>
    </tr>
    <tr>
      <td>Dwayne Johnson</td>
      <td>42</td>
      <td>Male</td>
      <td>Hayward</td>
    </tr>
  </tbody>
</table>

module.exports = table;
