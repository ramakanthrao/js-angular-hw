'use strict';

var assert = require('assert');
var task = require('../src/is-prime');
describe('HW-01: Number: ', function() {
    it('isPrime should return true if specified number is prime', function() {
        assert.equal(true, task.isPrime(2), "2");
        assert.equal(true, task.isPrime(3), "3");
        assert.equal(false, task.isPrime(4), "4");
        assert.equal(true, task.isPrime(5), "5");
        assert.equal(false, task.isPrime(6), "6");
        assert.equal(true, task.isPrime(7), "7");
        assert.equal(false, task.isPrime(8), "8");
        assert.equal(false, task.isPrime(9), "9");
        assert.equal(false, task.isPrime(10), "10");
        assert.equal(true, task.isPrime(11), "11");
        assert.equal(false, task.isPrime(12), "12");
        assert.equal(true, task.isPrime(13), "13");
        assert.equal(true, task.isPrime(113), "113");
        assert.equal(false, task.isPrime(119), "119");
    });
});
