var React = require('react');
var Products = require('../libs/products.js');
var page = require('page')

var FormProducts = React.createClass({
	getInitialState: function () {
	    return {
			name: '',
			desc: '',
			total: ''
	    };
	},
	componentDidMount: function() {
		this.setState({name:this.props.product.name});
		this.setState({desc:this.props.product.desc});
		this.setState({total: this.props.product.total});
	},
	editProducts : function () {
		event.preventDefault();

		var obj = {_id: this.props.product._id,
					name: this.state.name,
					desc: this.state.desc,
					total: this.state.total};

					console.log(obj)

		Products.edit(obj, (err, data) => {
			if (err) {

			console.log(err)
			}
			page('/admin/products');
		})

	},
	handleInputName: function (ev) {
		this.setState({name: ev.target.value})
	},
	handleInputDesc: function (ev) {
		this.setState({desc: ev.target.value})
	},
	handleInputTotal: function (ev) {
		this.setState({total: ev.target.value})
	},
   	render: function () {
        return (
            <form>
				<div>
					<label>Nombre</label>
					<input className="u-full-width" type="text" value={this.state.name} onChange={this.handleInputName}/>
				</div>

				<div>
					<label>Descripcion</label>
					<input className="u-full-width" type="text" value={this.state.desc} onChange={this.handleInputDesc} />
				</div>

				<div>
					<label>Cantidad</label>
					<input className="u-full-width" type="number" value={this.state.total} onChange={this.handleInputTotal} />
				</div>

				<div>
					<label htmlFor="pass">Imagen</label>
					<input className="u-full-width" type="file"  />
				</div>

				<div>
					<input className="button-primary" type="submit" value="Agregar" onClick={this.editProducts}/>
				</div>
				<div>
				</div>
			</form>
        );
    }
});

module.exports = FormProducts;
