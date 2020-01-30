'use strict';
var assert = require('assert');
var task = require('../src/find-tag-name');
describe('HW-01: String: ', function() {
	it('findTagName should remove first and last angle brackets from tag string', function() {
		assert.equal('div', task.findTagName('<div>'));
		assert.equal('span', task.findTagName('<span>'));
		assert.equal('a', task.findTagName('<a>'));
	});
});








