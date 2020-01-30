'use strict';
var assert = require('assert');
var task = require('../src/concat-string');

describe('HW-01: String: ', function() {
	it('concatenateStrings should return concatenation of two strings', function() {
		assert.equal('aabb', task.concatenateStrings('aa','bb'));
		assert.equal('aa', task.concatenateStrings('aa',''));
		assert.equal('bb', task.concatenateStrings('','bb'));
	});
});