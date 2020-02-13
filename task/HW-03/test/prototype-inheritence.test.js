
var assert = require('assert');
var Proto = require('../src/prototype-inheritence.js');
var Test = require('../../Utils/TestUtil');

describe('HW-03:  prototype inheritence static tests', function() {
  var array = [1, 2, 3, 4, 5];

  it('should square() correctly', function() {
    assert.equal(array.square().join(), [1, 4, 9, 16, 25].join());
    assert.equal(array.join(), [1, 2, 3, 4, 5].join(), 'The original array must not be changed');
  });

  it('should cube() correctly', function() {
    assert.equal(array.cube().join(), [1, 8, 27, 64, 125].join());
    assert.equal(array.join(), [1, 2, 3, 4, 5].join(), 'The original array must not be changed');
  });
  
  it('should sum() and average() correctly', function() {
    assert.equal(array.sum(), 15, 'Wrong sum');
    assert.equal(array.average(), 3, 'Wrong average');
    expect(isNaN([].average())).toBe(true);
  });
  
  it('should even() and odd() correctly', function() {
    assert.equal(array.even().join(), [2, 4].join(), 'Wrong result for even()');
    assert.equal(array.join(), [1, 2, 3, 4, 5].join(), 'The original array must not be changed');

    assert.equal(array.odd().join(), [1, 3, 5].join(), 'Wrong result for odd()');
    assert.equal(array.join(), [1, 2, 3, 4, 5].join(), 'The original array must not be changed');
  });
});

describe('HW-03:  prototype inheritence random tests', function() {
  var array = [];
  while (array.length < 20) array.push(Test.randomNumber(200));
  
  it('should even() and odd() correctly', function() {
    assert.equal(array.odd().even().join(), [].join(), 'odd() or even() returned wrong result');
    assert.equal(array.odd().length + array.even().length, array.length, 'The count of odd and even values must be the total array length');
  });
  
  it('should work all together :)', function() {
    assert.equal(array.square().join(), array.map(function(v) { return v * v; }).join(), 'square() returnd wrong result');
    assert.equal(array.cube().join(), array.map(function(v) { return v * v * v; }).join(), 'cube() returnd wrong result');
    assert.equal(array.even().join(), array.filter(function(v) { return v % 2 == 0; }).join(), 'even() returnd wrong result');
    assert.equal(array.odd().join(), array.filter(function(v) { return v % 2 == 1; }).join(), 'odd() returnd wrong result');
    assert.equal(array.sum(), array.reduce(function (p, c) { return p + c; }, 0), 'sum() returnd wrong result');
    assert.equal(array.average(), array.sum() / array.length, 'average() returnd wrong result');
  });
});