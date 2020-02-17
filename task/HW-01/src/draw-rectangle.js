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
    var finalString = '';
    for (var i = 1; i <= height; i++) {
        for (var j = 1; j <= width; j++) {
            if (i == 1 && j == 1)
                finalString += '\u250c';
            else if (i == 1 && j == width)
                finalString += '\u2510' + '\n';
            else if (i == height && j == 1)
                finalString += '\u2514';
            else if (i == height && j == width)
                finalString += '\u2518';
            else if ((i == 1 || i == height) && (j > 1 && j < width))
                finalString += '\u2500';
            else if ((j == 1) && (i > 1 && i < height))
                finalString += '\u2502';
            else if ((j == width) && (i > 1 && i < height))
                finalString += '\u2502' + '\n';
            else if ((j > 1 && j < width) && (i > 1 && i < height))
                finalString += ' ';
        }
    }
    return finalString+'\n';

}



module.exports = {
    drawRectangle: drawRectangle
};
