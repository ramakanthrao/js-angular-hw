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
    const TAG_OPEN_BRACES = "<";
    const TAG_CLOSE_BRACES = ">";

    if (str.charAt(0) === TAG_OPEN_BRACES && str.charAt(str.length - 1) === TAG_CLOSE_BRACES) {
        return str.substring(1, str.length - 1);
    } else {
        throw new Error("Invalid tag name")
    }
}

module.exports = {
    findTagName: findTagName
};
