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
function zero(func)   { return func ? func(0) : 0; };
function one(func)    { return func ? func(1) : 1; };
function two(func)    { return func ? func(2) : 2; };
function three(func)  { return func ? func(3) : 3; };
function four(func)   { return func ? func(4) : 4; };
function five(func)   { return func ? func(5) : 5; };
function six(func)    { return func ? func(6) : 6; };
function seven(func)  { return func ? func(7) : 7; };
function eight(func)  { return func ? func(8) : 8; };
function nine(func)   { return func ? func(9) : 9; };

function plus( b )      { return function( a ) { return a + b; }; };
function minus( b )     { return function( a ) { return a - b; }; };
function times( b )     { return function( a ) { return a * b; }; };
function dividedBy( b ) { return function( a ) { return Math.floor(a / b); }; };

function add(x){
    let sum = x;
    function resultFn(y){
        sum += y;
        return resultFn;
    }
    resultFn.valueOf = function(){
            return sum;
        };
    return resultFn;
}






module.exports ={
zero:zero,	
one :one, 	
two :two, 
three:three,
four:four,
five:five,
six :six,
seven:seven,
eight:eight,
nine:nine,
dividedBy:dividedBy,
minus:minus,
plus:plus,
times:times,
add:add
};