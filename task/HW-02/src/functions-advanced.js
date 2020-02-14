'use strict';

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
    var value = 0;
    if (arguments.length > 0) {
        return arguments[0](value);
    } else
        return value;

 }
function one() {
    var value = 1;
    if (arguments.length > 0) {
        return arguments[0](value);
    } else
        return value;
}
function two() {
    var value = 2;
    if (arguments.length > 0) {
        return arguments[0](value);
    } else
        return value;
}
function three() {
    var value = 3;
    if (arguments.length > 0) {
        return arguments[0](value);
    } else
        return value;
}
function four() {
    var value = 4;
    if (arguments.length > 0) {
        return arguments[0](value);
    } else
        return value;
}
function five() {
    var value = 5;
    if (arguments.length > 0) {
        return arguments[0](value);
    } else
        return value;
}
function six() {
    var value = 6;
    if (arguments.length > 0) {
        return arguments[0](value);
    } else
        return value;
}
function seven() { 
    var value = 7;
    if (arguments.length > 0) {
        return arguments[0](value);
    } else
        return value;
}
function eight() { 
    var value = 8;
    if (arguments.length > 0) {
        return arguments[0](value);
    } else
        return value;
}
function nine() {
    var value = 9;
    if (arguments.length > 0) {
        return arguments[0](value);
    } else
        return value;
}


function dividedBy(value1) {
    return function(value){
        return Math.round(value / value1);
    }
}
function minus(value1) {
    return function(value){
        return value - value1;
    }
}
function plus(value1) {
    return function(value){
        return value + value1;
    }
}
function times(value1) {
    return function(value){
        return value * value1;
    }
 }
function add(a) {
    return function(b){
        return a + b;
    }
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