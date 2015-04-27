var React = require('react');
var Products = require('../libs/products.js');


var FormProducts = React.createClass({
	getInitialState: function () {
	    return {
			// name: '',
			// desc: '',
			// brand: '',
			// total: '',
			// image: {}
	    };
	},
	newProducts : function () {
		event.preventDefault();

		var obj = {	name: this.state.name, 
					desc: this.state.desc, 
					total: this.state.total, 
					brand: this.state.brand,
					image: this.state.image
				};
		Products.newProduct(obj, (err, data) => {
			if (err) {

			console.log(err)
			}
			
			this.setState({name: ''});
			this.setState({desc: ''});
			this.setState({brand: ''});
			this.setState({total: ''});
			this.setState({image: null})
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
	handleInputBrand: function (ev) {
		this.setState({brand: ev.target.value})
	},
	handleInputImage: function (ev) {
		this.setState({image: ev.target.files[0]})
		// console.log(ev.target.files[0])
	},
   	render: function () {
        return (
            <form>
				<div>
					<label>Nombre</label>
					<input className="u-full-width" type="text" value={this.state.name} onChange={this.handleInputName}/>
				</div>
				
				<div>
					<label>Marca</label>
					<input className="u-full-width" type="text" value={this.state.brand} onChange={this.handleInputBrand}/>
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
					<input className="u-full-width" type="file"  onChange={this.handleInputImage}/>
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
