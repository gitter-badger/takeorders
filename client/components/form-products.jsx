var React = require('react');


var FormProducts = React.createClass({
   	render: function () {
        return (
            <form className="login-form">
				<div>
					<label htmlFor="email">Name</label>
					<input className="u-full-width" type="text" placeholder="Tomaco"/>
				</div>

				<div>
					<label htmlFor="pass">Description</label>
					<input className="u-full-width" type="text"  />
				</div>

				<div>
					<label htmlFor="pass">Description</label>
					<input className="u-full-width" type="text"  />
				</div>

				<div>
					<input className="button-primary" type="submit" value="Add"/>
				</div>
				<div>
				</div>
			</form>
        );
    }
});

module.exports = FormProducts;
