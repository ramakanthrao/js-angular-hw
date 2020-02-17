
var assert = require('assert');
var Cat = require('../src/object-with-functions.js');
describe("HW-03: The Cat constructor", function() {

  it("should be a function", function() {
    assert.equal(typeof Cat, 'function');
  });
  
  it("should not allow cats to be instantiated without a name and an age", function () {
    expect(function () { return new Cat() }).toThrow('Must provide a name and a weight!');
  });
  
  it("should have an averageWeight method", function () {
    assert.equal(typeof Cat.averageWeight, 'function');
  });
  
    
  it("should compute the correct average weight of cats created so far", function () {
    assert.equal( 
      (function () { 
        cleo = new Cat('cleo', 15);
        garfield = new Cat('garfield', 35);
        return Cat.averageWeight();
      }()), 25);
    });
});

describe("HW-03: The cat instances", function () {
	
	var felix = new Cat('felix', 15);

  it("instances should not have an averageWeight method", function () {
    assert.equal((function () {
      var tom = new Cat('tom', 30); 
      return tom.averageWeight
      }()) , 
      undefined);
  });
  
  it("instances should have the correct constructor property set", function () {
    assert.equal( 
      (function () { 
        var bing = new Cat('bing', 15);
        return bing.constructor;
      }()), Cat);
  });
  
  it("weight property should be settable in the usual way, e.g. felix.weight=", function () {
    assert.equal( (function () { felix.weight = 20; return felix.weight; })(), 20);
  });
  
  it("Cat.averageWeight() should still be correct after updating instances", function () {
    assert.equal( Cat.averageWeight(), 23);
  });
  
  it("Uses Object.defineProperty to get and set instance weight", function () {
    expect(Object.getOwnPropertyDescriptor(felix, 'weight').get).toBeTruthy();
  });
});