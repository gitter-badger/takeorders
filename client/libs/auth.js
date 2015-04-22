const request = require('superagent');
const superAgentAuth = require('superagent-auth-bearer');
const page = require('page');

superAgentAuth(request)

class Server {

	constructor () {

	}

	static post (url, data, cb) {
		if (localStorage.token) {
			request
				.post(url)
			  	.authBearer(localStorage.token)
			  	.send(data)
			  	.end((err,res) => {
			    	if (err) {
			    		cb(err);
			    	}
			    	cb(null, res)
			 	})
		} else {
			alert('Para realizar esta accion, debes loguearte');
			page('/');
		}
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
			page('/');
		}

	}

	static register(email, password, cb) {
		request
			.post('/auth/register')
			.send({email, password})
			.end((err, res) => {
				console.log(err)
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
				localStorage.token = res.body.token;
				return cb(null, res.body)
			})
	}

	static logout() {
		delete localStorage.token;
		page('/');
	}

}

module.exports = Server;
