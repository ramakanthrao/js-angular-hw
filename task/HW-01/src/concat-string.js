'use strict';

/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatenateStrings(value1, value2) {
    // throw new Error('Not implemented');
    if ((value1 == null || value1 == undefined) && (value2 != null && value2 != undefined))
        return value2;
    else if ((value2 == null || value2 == undefined) && (value1 != null && value1 != undefined))
        return value1;
    else if ((value2 == null || value2 == undefined) && (value1 == null || value1 == undefined))
        return "";
    else{
        return value1 + value2;
    }
}

module.exports = {
    concatenateStrings: concatenateStrings,
};
