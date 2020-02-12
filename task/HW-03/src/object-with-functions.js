/**
 *	In object-oriented programming, it is sometimes useful to have private shared state 
 *	among all instances of a class; in other languages, like ruby, this shared state 
 *	would be tracked with a class variable. 
 *	In javascript we achieve this through closures and immediately-invoked 
 *	function expressions.
 * 
 *	Write a {Cat} constructor that takes arguments name and weight to instantiate 
 *	a new cat object. The constructor should also have an {averageWeight} method that 
 *	returns the average weight of cats created with the constructor.
 *	Throw an error if name or weight not specified when invoking the constructor
 *
 *	
 * 	@example
 *		var garfield = new Cat('garfield', 25);
 *		Cat.averageWeight();  =>25
 *
 *		var felix = new Cat('felix', 15);
 *		Cat.averageWeight();   => 20
 *		
 *		felix.weight = 25;
 *		felix.weight =>25
 *		Cat.averageWeight(); => 25
 *
 *	@todo 
 *		Use closures and IIFE to create {Cat}
 *
*/

function Cat(){
	throw new Error('Not implemented');
};

module.exports = Cat;