var React = require('react');


var FormProducts = React.createClass({
   	render: function () {
        return (
            <form>
				<div>
					<label htmlFor="email">Nombre</label>
					<input className="u-full-width" type="text" placeholder="Tomaco"/>
				</div>

				<div>
					<label htmlFor="pass">Description</label>
					<input className="u-full-width" type="text"  />
				</div>

				<div>
					<label htmlFor="pass">Cantidad</label>
					<input className="u-full-width" type="text"  />
				</div>

				<div>
					<label htmlFor="pass">Imagen</label>
					<input className="u-full-width" type="file"  />
				</div>

				<div>
					<input className="button-primary" type="submit" value="Agregar"/>
				</div>
				<div>
				</div>
			</form>
        );
    }
});

module.exports = FormProducts;
