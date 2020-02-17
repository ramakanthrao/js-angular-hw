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

var Cat=(function Cat(weight,name){
	var cats = [];
  var constructor = function (name, weight) {
    if (typeof name == "undefined" || typeof weight == "undefined") {
      throw "Must provide a name and a weight!";
    }
    Object.defineProperty(this, 'name', {
      get: function () { return name }
    });
    Object.defineProperty(this, 'weight', {
      get: function () { return weight },
      set: function (x) { weight = x; return weight }
    });
    cats.push(this);
  };
  constructor.averageWeight = function() {
    return cats.reduce(function (sum, cat) {
		console.log(sum + cat.name);
		 return sum + cat.weight 
		}, 0) / cats.length;
  };
  return constructor;
	
}());

module.exports = Cat;