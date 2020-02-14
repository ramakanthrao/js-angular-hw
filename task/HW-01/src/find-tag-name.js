'use strict';

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function findTagName(str) {
    str = str.slice(1, str.length - 1)
    return str
    //throw new Error('Not implemented');
}
module.exports = {
    findTagName: findTagName
};
