'use strict';

/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string} value3
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatenateStrings(value1, value2) {
    //throw new Error('Not implemented');
      var value3= value1+value2;
   return value3;
}

module.exports = {
    concatenateStrings: concatenateStrings,
};
