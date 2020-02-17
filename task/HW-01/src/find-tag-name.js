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
    if(str=='')
    return '';
    
    return str.substr(1,str.length-2);
}

module.exports = {
    findTagName: findTagName
};
