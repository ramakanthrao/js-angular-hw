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
    return str.substring(1,str.length-1);
}

module.exports = {
    findTagName: findTagName
};
