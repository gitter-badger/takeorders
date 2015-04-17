const request = require('superagent');
const superAgentAuth = require('superagent-auth-bearer');

superAgentAuth(request)

class Server {
	
	constructor () {

	}

	static get(url, cb) {
		if (localStorage.token) {
			request
				.get(url)
			  	.authBearer(localStorage.token)
			  	.end((err,res) => {
			    	if (err) {
			    		cb(err);
			    	}
			    	cb(null, res)
			 	})
		} else {
			alert('Para realizar esta accion, debes loguearte');
		}
		
	}

	static register(email, password, cb) {
		request
			.post('/auth/register')
			.send({email, password})
			.end((err, res) => {
				if (err) {
					return cb(err)
				} 
				return cb(null, res.body.verify)
			})
	}

	static login(email, password, cb) {
		request
			.post('/auth/login')
			.send({email, password})
			.end((err, res) => {
				if (err) {
					return cb(err)
				}
				return cb(null, res.body)
			})
	}

}

module.exports = Server;