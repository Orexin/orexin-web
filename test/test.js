//var sayHello = require('../src/js/main').sayHello;
var assert = require('chai').assert;
var test = require('../src/components/footer').test;

describe('App', () => {
	it('App should return true', () => {
		let result = test();
		assert.equal(result, 'Footer works');
	});
});
