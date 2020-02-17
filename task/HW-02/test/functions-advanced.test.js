
'use strict';

var assert = require('assert');
var Test = require('../../Utils/TestUtil');
var zero = require('../src/functions-advanced').zero;
var one = require('../src/functions-advanced').one;
var two = require('../src/functions-advanced').two;
var three = require('../src/functions-advanced').three;
var four = require('../src/functions-advanced').four;
var five = require('../src/functions-advanced').five;
var six = require('../src/functions-advanced').six;
var seven = require('../src/functions-advanced').seven;
var eight = require('../src/functions-advanced').eight;
var nine = require('../src/functions-advanced').nine;
var dividedBy = require('../src/functions-advanced').dividedBy;
var minus = require('../src/functions-advanced').minus;
var plus = require('../src/functions-advanced').plus;
var times = require('../src/functions-advanced').times;
var add = require('../src/functions-advanced').add;

describe('HW-02: random calculations', function() {
  var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

	it('shoud do static example calculations', function() {
	  assert.equal(seven(times(five())), 35);
	  assert.equal(four(plus(nine())), 13);
	  assert.equal(eight(minus(three())), 5);
	  assert.equal(six(dividedBy(two())), 3);
	});

  it('should add', function() {
    for (var i=0; i<50; i++) {
      var num1 = Test.sample(numbers);
      var num2 = Test.sample(numbers);
      assert.equal(eval(num1 + '(plus(' + num2 + '()))'), numbers.indexOf(num1) + numbers.indexOf(num2), 'Wrong result for ' + num1 + ' + ' + num2);
    }
  });
  
  it('should subtract', function() {
    for (var i=0; i<50; i++) {
      var num1 = Test.sample(numbers);
      var num2 = Test.sample(numbers);
      assert.equal(eval(num1 + '(minus(' + num2 + '()))'), numbers.indexOf(num1) - numbers.indexOf(num2), 'Wrong result for ' + num1 + ' - ' + num2);
    }
  });
  
  it('should multiply', function() {
    for (var i=0; i<50; i++) {
      var num1 = Test.sample(numbers);
      var num2 = Test.sample(numbers);
      assert.equal(eval(num1 + '(times(' + num2 + '()))'), numbers.indexOf(num1) * numbers.indexOf(num2), 'Wrong result for ' + num1 + ' * ' + num2);
    }
  });
  
/*   it('should divide', function() {
    for (var i=0; i<50; i++) {
      var num1 = Test.sample(numbers);
      var num2 = Test.sample(numbers.slice(1));
      Test.assertSimilar(eval(num1 + '(dividedBy(' + num2 + '()))'), numbers.indexOf(num1) / numbers.indexOf(num2)|0, 'Wrong result for ' + num1 + ' / ' + num2);
    }
  }); */
});

describe('HW-02: Chain of function calls', function() {
	var a = add(1)(2);
	var b = add(3)(4);
	
	it('should return the number passed in on a single call', function() {
	  assert.equal(add(1), 1);
	});
	
	it('should be able to store values and reuse them', function() {
	  assert.equal(b + 3, 10);
	  assert.equal(a + 5, 8);
	  assert.equal(a(1)(2), 6);
	  assert.equal(b(1)(2)(3), 13);
	  assert.equal(a(1)(2)(3), 9);
	  assert.equal(b(1)(2)(3)(4)(5), 22);
	});
	
	it('should be able to store curried functions', function() {
	  assert.equal(a(3), 6);
	  assert.equal(b(2), 9);
	});
	
	it('should be able to execute chain of function calls', function() {  
	  assert.equal(add(1)(2), 3);
	  assert.equal(add(1)(2)(3), 6);
	  assert.equal(add(1)(2)(3)(4), 10);
	  assert.equal(add(1)(2)(3)(4)(5), 15);
	});
});
