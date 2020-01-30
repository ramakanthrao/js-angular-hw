'use strict';
var assert = require('assert');
var task = require('../src/find-string-length');
describe('HW-01: String: ', function() {
	it('getStringLength should return the length of string', function() {
		assert.equal(5, task.getStringLength('aaaaa'), "'aaaaa' length should be 5");
		assert.equal(0, task.getStringLength(''), "'' length should be 0");
	});
});