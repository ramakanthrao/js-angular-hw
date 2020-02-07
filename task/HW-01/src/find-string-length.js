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
    if(value != undefined && value !== null){
        return value.length;
    }
    return 0;
}


module.exports = {
    getStringLength: getStringLength
};
