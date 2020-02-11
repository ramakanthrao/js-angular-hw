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
    let top = '┌' + '─'.repeat(width - 2) + '┐\n';
    let middle = '│' + ' '.repeat(width - 2) + '│\n';
    let bottom = '└' + '─'.repeat(width - 2) + '┘\n';
    return top + middle.repeat(height - 2) + bottom;

}



module.exports = {
    drawRectangle: drawRectangle
};
