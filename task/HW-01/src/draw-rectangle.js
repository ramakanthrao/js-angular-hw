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
    let horiSize=width-2;
    let horiLine='─'.repeat(horiSize);
    let  spaceLine=' '.repeat(horiSize);
    let bottom=`└${horiLine}┘\n`;
    let  top=`┌${horiLine}┐\n`;
   let middle=`│${spaceLine}│\n`.repeat(height-2);
    return top+middle+bottom;
}



module.exports = {
    drawRectangle: drawRectangle
};
