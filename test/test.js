var sayHello = require('../src/js/main').sayHello;
var assert = require('chai').assert;

describe('App', () => {
	it('App should return true', () => {
		let result = sayHello();
		assert.equal(result, 'true');
	});
});
