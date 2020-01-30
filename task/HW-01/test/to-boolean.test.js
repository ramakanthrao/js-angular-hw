'use strict';

var assert = require('assert');
var task = require('../src/to-boolean');
describe('HW-01: Boolean: ', function() {
    it('toBoolean should convert any value to boolean', function() {
        assert.equal(true, task.toBoolean(null));
        assert.equal(true, task.toBoolean('test'));
        assert.equal(false, task.toBoolean(''));
		assert.equal(true, task.toBoolean('undefined'));
        assert.equal(false, task.toBoolean(0));
		assert.equal(false, task.toBoolean(undefined));
		assert.equal(true, task.toBoolean(false, -1));
        assert.equal(false, task.toBoolean(new Number('test')));
    });
});
