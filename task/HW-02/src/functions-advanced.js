"use strict";

/**
 * This time we want to write calculations using functions and get the results.
 *
 * Let's have a look at some examples:
 *
 * @example
 *   seven(times(five())); => 35
 *	 four(plus(nine()));  => 13
 *	 eight(minus(three()));  => 5
 *	 six(dividedBy(two()));  => 3
 *
 *	Requirements:
 *		There must be a function for each number from 0 ("zero") to 9 ("nine")
 *		There must be a function for each of the following mathematical operations:
 * 			plus, minus, times, dividedBy
 *		Each calculation consist of exactly one operation and two numbers
 *		The most outer function represents the left operand, the most
 *		inner function represents the right operand
 *		Divison should be integer division.
 *			For example, eight(dividedBy(three())); should return 2, not 2.666666...
 */
function zero() {
  let digit = arguments[0];
  if (digit instanceof Function) {
    return digit(0);
  }
  return 0;
}
function one() {
  let digit = arguments[0];
  if (digit instanceof Function) {
    return digit(1);
  }
  return 1;
}
function two() {
  let digit = arguments[0];
  if (digit instanceof Function) {
    return digit(2);
  }
  return 2;
}
function three() {
  let digit = arguments[0];
  if (digit instanceof Function) {
    return digit(3);
  }
  return 3;
}
function four() {
  let digit = arguments[0];
  if (digit instanceof Function) {
    return digit(4);
  }
  return 4;
}
function five() {
  let digit = arguments[0];
  if (digit instanceof Function) {
    return digit(5);
  }
  return 5;
}
function six() {
  let digit = arguments[0];
  if (digit instanceof Function) {
    return digit(6);
  }
  return 6;
}
function seven() {
  let digit = arguments[0];
  if (digit instanceof Function) {
    return digit(7);
  }
  return 7;
}
function eight() {
  let digit = arguments[0];
  if (digit instanceof Function) {
    return digit(8);
  }
  return 8;
}
function nine() {
  let digit = arguments[0];
  if (digit instanceof Function) {
    return digit(9);
  }
  return 9;
}
function add(x) {
  function ans(y) {
    return add(x + y);
  }
  ans.valueOf = function() {
    return x;
  };
  return ans;
}

function dividedBy(x) {
  return function(y) {
    return  Math.floor(y/x);
  };
}
function minus(x) {
  return function(y) {
    return y-x;
  };
}
function plus(x) {
  return function(y) {
    return x + y;
  };
}
function times(x) {
  return function(y) {
    return x * y;
  };
}

module.exports = {
  zero: zero,
  one: one,
  two: two,
  three: three,
  four: four,
  five: five,
  six: six,
  seven: seven,
  eight: eight,
  nine: nine,
  dividedBy: dividedBy,
  minus: minus,
  plus: plus,
  times: times,
  add: add
};
