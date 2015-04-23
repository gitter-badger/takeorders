var React = require('react');

var table = React.createClass({

	getInitialState: function () {
	    return {
			usuario: '/usuario/' + this.props.email
	    };
	},

	render: function () {
		return (
			<table>
				<tr>
					<td></td>
				</tr>
			</table>
		);
	}
});


module.exports = table;
