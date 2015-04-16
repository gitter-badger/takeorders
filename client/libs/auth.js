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

	static auth(email, password) {
		request
			.post('/auth/register')
			.send({email, password})
			.end(function (err, res) {
				console.log(res.body)
			})
	}
}

module.exports = Server;