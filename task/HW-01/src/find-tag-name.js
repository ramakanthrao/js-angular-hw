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
    if (str != undefined && str != null)
        return str.split('<')[1].split(">")[0];
    return '';
}

module.exports = {
    findTagName: findTagName
};
