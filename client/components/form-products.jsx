var React = require('react');

var Products = require('../libs/products.js');

var FormProducts = React.createClass({
	getInitialState: function () {
	    return {
			name: '',
			desc: '',
			total: ''
	    };
	},
	newProducts : function () {
		event.preventDefault();
		var obj = {name: this.state.name, desc: this.state.desc, total: this.state.total};
		Products.newProduct(obj, (err, data) => {
			console.log(data.body)
			this.setState({name: ''})
			this.setState({desc: ''})
			this.setState({total: ''})
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
					<input className="button-primary" type="submit" value="Agregar" onClick={this.newProducts}/>
				</div>
				<div>
				</div>
			</form>
        );
    }
});

module.exports = FormProducts;
