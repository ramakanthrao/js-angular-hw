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
    var f = arguments[0];
    if (f instanceof Function) {
        return f(0);
    }
    return 0;
}
function one() {
    var f = arguments[0];
    if (f instanceof Function) {
        return f(1);
    }
    return 1;
}
function two() {
    var f = arguments[0];
    if (f instanceof Function) {
        return f(2);
    }
    return 2;
}
function three() {
    var f = arguments[0];
    if (f instanceof Function) {
        return f(3);
    }
    return 3;
}
function four() {
    var f = arguments[0];
    if (f instanceof Function) {
        return f(4);
    }
    return 4;
}
function five() {
    var f = arguments[0];
    if (f instanceof Function) {
        return f(5);
    }
    return 5;
}
function six() {
    var f = arguments[0];
    if (f instanceof Function) {
        return f(6);
    }
    return 6;
}
function seven() {
    var f = arguments[0];
    if (f instanceof Function) {
        return f(7);
    }
    return 7;
}
function eight() {
    var f = arguments[0];
    if (f instanceof Function) {
        return f(8);
    }
    return 8;
}
function nine() {
    var f = arguments[0];
    if (f instanceof Function) {
        return f(9);
    }
    return 9;
}


function dividedBy(operand2) {
    return function (operand1) {
        return operand1 / operand2;
    };
}
function minus(operand2) {
    return function (operand1) {
        return operand1 - operand2;
    };
}
function plus(operand2) {
    return function (operand1) {
        return operand1 + operand2;
    };
}
function times(operand2) {
    return function (operand1) {
        return operand1 * operand2;
    };
}


function add(x) {
    function resultFn(y) {
        return add(x + y);
    }
    resultFn.valueOf = function () {
        return x;
    };
    return resultFn;
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