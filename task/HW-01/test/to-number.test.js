'use strict';

var assert = require('assert');
var task = require('../src/to-number');
describe('HW-01: Number: ', function() {
    it('toNumber should convert any value to number or return the default', function() {
        assert.equal(-1, task.toNumber(null, -1));
        assert.equal(-1, task.toNumber('test', -1));
        assert.equal(1, task.toNumber('1', 0));
		assert.equal(2, task.toNumber('2', -1));
        assert.equal(42, task.toNumber(42, 0));
		assert.equal(1, task.toNumber(true, -1));
		assert.equal(0, task.toNumber(false, -1));
        assert.equal(42, task.toNumber(new Number(42), 0));
        assert.equal(-1, task.toNumber(undefined, -1));
    });
});
