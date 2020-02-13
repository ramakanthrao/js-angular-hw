'use strict';

/**********************************************************************************************
 *                                                                                            *
 * Plese read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions                    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments      *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures                           *
 *                                                                                            *
 **********************************************************************************************/


/**
 * Returns the functions composition of two specified functions f(x) and g(x).
 * The result of compose is to be a function of one argument, (lets call the argument x),
 * which works like applying function f to the result of applying function g to x, i.e.
 *  getComposition(f,g)(x) = f(g(x))
 *
 * @param {Function} f
 * @param {Function} g
 * @return {Function}
 *
 * @example 
 *   getComposition(Math.sin, Math.asin)(x) => Math.sin(Math.acos(x))
 *
 */
function getComposition(f, g) {
    return function (x) {
        return f(g(x));
    }
}
/**
 * Returns the math power function with the specified exponent
 *
 * @param {number} exponent
 * @return {Function}
 *
 * @example
 *   var power2 = getPowerFunction(2); // => x^2
 *   power2(2) => 4
 *   power2(4) => 16
 *
 *   var power05 = getPowerFunction(0.5); // => x^0.5
 *   power05(4) => 2
 *   power05(16) => 4
 *
 */
function getPowerFunction(exponent) {
    return function (num) {
        return Math.pow(num, exponent);
    }
}

    /**
     * Returns the polynom function of one argument based on specified coefficients.
     * See: https://en.wikipedia.org/wiki/Polynomial#Definition
     *
     * @params {integer}
     * @return {Function}
     *
     * @example
     *   getPolynom(2,3,5) => y = 2*x^2 + 3*x + 5
     *   getPolynom(1,-3)  => y = x - 3
     *   getPolynom(8)     => y = 8
     *   getPolynom()      => null
     */
    function getPolynom() {
        var args = arguments;
        if (args.length == 0)
            return null;
        return function (x) {
            var y = 0
            var totalArguments = args.length;
            for (var i = 0; i < totalArguments - 2; i++) {
                y += args[i] * (x ** (totalArguments - 1 - i));
            }
            y += args.length > 1 ? args[totalArguments - 2] * x + args[totalArguments - 1] : args[totalArguments - 1];
            return y;
        }
    }


    /**
     * Memoizes passed function and returns function
     * which invoked first time calls the passed function and then always returns cached result.
     *
     * @params {Function} func - function to memoize
     * @return {Function} memoized function
     *
     * @example
     *   var memoizer = memoize(() => Math.random());
     *   memoizer() => some random number  (first run, evaluates the result of Math.random())
     *   memoizer() => the same random number  (second run, returns the previous cached result)
     *   ...
     *   memoizer() => the same random number  (next run, returns the previous cached result)
     */
    function memoize(func) {
        var value;
        return function () {
        if (value == undefined) {
        value = func();
        }
        return value;
        }
    }




/**
 * Return the function with partial applied arguments
 *
 * @param {Function} fn
 * @return {Function}
 *
 * @example
 *   var fn = function(x1,x2,x3,x4) { return  x1 + x2 + x3 + x4; };
 *   partialUsingArguments(fn, 'a')('b','c','d') => 'abcd'
 *   partialUsingArguments(fn, 'a','b')('c','d') => 'abcd'
 *   partialUsingArguments(fn, 'a','b','c')('d') => 'abcd'
 *   partialUsingArguments(fn, 'a','b','c','d')() => 'abcd'
 */
function partialUsingArguments(fn) {
    var arg = arguments;
    var constructString = '';
    for (var i = 0; i < arg.length; i++) {
        if (typeof (arg[i]) != 'function')
            constructString += arg[i];
    }
    return function () {
        for (var i = 0; i < arguments.length; i++) {
            constructString += arguments[i];
        }
        return constructString;
    }
}


/**
 * Returns the id generator function that returns next integer starting from specified number every time when invoking.
 *
 * @param {Number} startFrom
 * @return {Function}
 *
 * @example
 *   var getId4 = getIdGenerator(4);
 *   var getId10 = gerIdGenerator(10);
 *   getId4() => 4
 *   getId10() => 10
 *   getId4() => 5
 *   getId4() => 6
 *   getId4() => 7
 *   getId10() => 11
 */
function getIdGeneratorFunction(startFrom) {
    return function () {
        return startFrom++;
    }
}


module.exports = {
    getComposition: getComposition,
    getPowerFunction: getPowerFunction,
    getPolynom: getPolynom,
    memoize: memoize,
    partialUsingArguments: partialUsingArguments,
    getIdGeneratorFunction: getIdGeneratorFunction
}
