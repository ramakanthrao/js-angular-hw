'use strict';
/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function drawRectangle(width, height) {
    let top = '\u250c' + ('\u2500').repeat(width - 2) + '\u2510\n'
    let bottom = '\u2514' + ('\u2500').repeat(width - 2) + '\u2518\n'
    let middle = ""
    for (let i = 1; i <= height - 2; i++) {
        middle += '\u2502' + (' ').repeat(width - 2) + '\u2502\n'
    }
    return top + middle + bottom
    throw new Error('Not implemented');
}
module.exports = {
    drawRectangle: drawRectangle
};
