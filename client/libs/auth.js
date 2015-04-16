const request = require('superagent');
const superAgentAuth = require('superagent-auth-bearer');

superAgentAuth(request)

class Server {
	
	constructor () {

	}

	static get(url, cb) {
		request
			.get(url)
		  	.authBearer('Sarasa')
		  	.end(function(err,res) {
		    	if (err) {
		    		cb(err);
		    	}
		    	cb(null, res)
		 	})
	}

	static auth(email, password, cb) {
		request
			.post('/auth/register')
			.send({email, password})
			.end(function (err, res) {
				if (err) {
					return cb(err)
				}
				return cb(null, res.body.verify)
			})
	}
}

module.exports = Server;