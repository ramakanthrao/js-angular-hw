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
    str = str.replace('<','');
    str = str.replace('>','');
    return str;
}

module.exports = {
    findTagName: findTagName
};
