'use strict';
var assert = require('assert');
var task = require('../src/draw-rectangle');
describe('HW-01: String: ', function() {
	it('drawRectangle should return the string representation of rectangle with specified size', function() {
		assert.equal(
		   '┌────┐\n'+
		   '│    │\n'+
		   '│    │\n'+
		   '└────┘\n',
			task.drawRectangle(6, 4)
		);
		assert.deepEqual(
		   '┌┐\n'+
		   '└┘\n',
			task.drawRectangle(2, 2)
		);
		assert.deepEqual(
		   '┌──────────┐\n'+
		   '│          │\n'+
		   '└──────────┘\n',
			task.drawRectangle(12, 3)
		);
	});
});