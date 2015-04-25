var React = require('react');
var _ = require('lodash');

var Products = require('../libs/products.js');


var table = React.createClass({

	getInitialState: function () {

	    return {
			products: [{}]
	    };
	},
	componentDidMount: function() {
		Products.getAll((err, data) => {

			this.setState({products: data.body})
		})
	},
	deleteProduct: function (ev){
		var _id = ev.target.getAttribute('id');

		console.log('Se quiere borrar: ' + _id);

		Products.delete({_id:_id}, (err, data) => {
			console.log('Borrado')
			console.log(this.state.products)

			_.remove(this.state.products, function(pro) {
			  return pro._id == _id;
			});
			this.setState({products: this.state.products})
		})
	},
	render: function () {
		return (
			<table className="u-full-width">
				<thead>
				    <tr>
				      <th>Nombre</th>
				      <th>Marca</th>
				      <th>Descripcion</th>
				      <th>Cantidad</th>
				      <th>Accion</th>
				    </tr>
				 </thead>
				 <tbody>
				{this.state.products.map((prod) => {
					var href = '/admin/products/' + prod._id;
					return (<tr>
								<td>{prod.name}</td>
								<td>{prod.brand}</td>
								<td>{prod.desc}</td>
								<td>{prod.total}</td>
								<td><a href={href} className="button button-primary">Editar</a> <button id={prod._id} onClick={this.deleteProduct}>Borrar</button></td>
							</tr>)
				})}
				</tbody>
			</table>
		);
	}
});


module.exports = table;
