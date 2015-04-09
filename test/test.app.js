var assert = require('assert');
var expect = require('expect.js');



describe('Prueba mocha', function(){
	var app = require('../app.js');
	it('Debe app.get(\'view engine\') retornar  ejs', function(){
		expect('ejs').to.be(app.set('view engine'))
	})
})

