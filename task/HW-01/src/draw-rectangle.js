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
    const line_separator = '\n';
    let firstLine = '\u250C' + '\u2500'.repeat(width - 2) + '\u2510' +line_separator;
    let lastLine = '\u2514' + '\u2500'.repeat(width - 2) + '\u2518' + line_separator;
    let otherLines = '\u2502' + ' '.repeat(width - 2) + '\u2502' + line_separator;
    return firstLine + otherLines.repeat(height - 2) + lastLine;
}

module.exports = {
    drawRectangle: drawRectangle
};
