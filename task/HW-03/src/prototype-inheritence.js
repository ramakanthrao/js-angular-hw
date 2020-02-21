'use strict'
/**
 *	Extend the built-in Array class with the following methods: 
 *		square(), cube(), average(), sum(), even() and odd().
 *
 *	@todo :
 *		1)	{square()} must return a copy of the array, containing all values squared
 *		2)	{cube()} must return a copy of the array, containing all values cubed
 *		3)	{average()} must return the average of all array values; on an empty array must return NaN
 *		4)	{sum()} must return the sum of all array values
 *		5)	{even()} must return an array of all even numbers
 *		6)	{odd()} must return an array of all odd numbers
 *
 *
 *	Note: the original array must not be changed in any case!
 *
*/
Array.prototype.square=function(){return this.map(function(n){return n*n})}
Array.prototype.cube=function(){return this.map(function(n){return n*n*n})}
Array.prototype.average=function(){return this.sum()/this.length}
Array.prototype.sum=function(){return this.reduce((a,b) => a + b, 0)}
Array.prototype.even=function(){return this.filter(function(n){return 0==n%2})}
Array.prototype.odd=function(){return this.filter(function(n){return 0!=n%2})}
module.exports = {};