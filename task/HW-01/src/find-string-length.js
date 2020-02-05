'use strict';

/**
 * Returns the length of given string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
function getStringLength(value) {
    //return String(value).length;
    return value.length;
}


module.exports = {
    getStringLength: getStringLength
};
