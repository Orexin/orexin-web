var app = require('../src/js/main');
var assert = require('chai').assert;

describe('App', () => {
	it('App should return true', () => {
		assert.equal(app(), 'true');
	});
});
