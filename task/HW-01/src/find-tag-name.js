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
    if (str.includes('<')) 
    str = str.replace('<','')
    if (str.includes('>')) 
    str = str.replace('>','');
    return str;
}

module.exports = {
    findTagName: findTagName
};
