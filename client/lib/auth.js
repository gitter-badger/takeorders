const request = require('superagent');

require('superagent-auth-bearer')(request);



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
}

module.exports = Server;