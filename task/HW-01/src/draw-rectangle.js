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
     horiLine='─'.repeat(width-2);
      spaceLine=' '.repeat(width-2);
     bottom=`└${horiLine}┘\n`;
      top=`┌${horiLine}┐\n`;
    middle=`│${spaceLine}│\n`.repeat(height-2);
    return top+middle+bottom;
}



module.exports = {
    drawRectangle: drawRectangle
};
