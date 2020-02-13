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
function zero(){throw new Error('Not implemented');}
function one (){throw new Error('Not implemented');} 	
function two (){throw new Error('Not implemented');} 	
function three (){throw new Error('Not implemented');} 
function four (){throw new Error('Not implemented');} 	
function five (){throw new Error('Not implemented');} 	
function six (){throw new Error('Not implemented');} 	
function seven (){throw new Error('Not implemented');} 
function eight (){throw new Error('Not implemented');} 
function nine (){throw new Error('Not implemented');}


function dividedBy (){throw new Error('Not implemented');}
function minus (){throw new Error('Not implemented');}
function plus (){throw new Error('Not implemented');}
function times (){throw new Error('Not implemented');}
function add (){throw new Error('Not implemented');}





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