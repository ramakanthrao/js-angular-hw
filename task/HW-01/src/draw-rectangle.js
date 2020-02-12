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

	var returnString = '';
	for (var i = 1; i <= height; i++) {
		for (var j = 1; j <= width; j++) {
			if (i == 1 && j == 1)
				returnString += '\u250c';
			else if (i == 1 && j == width)
				returnString += '\u2510' + '\n';
			else if (i == height && j == 1)
				returnString += '\u2514';
			else if (i == height && j == width)
				returnString += '\u2518';
			else if ((i == 1 || i == height) && (j > 1 && j < width))
				returnString += '\u2500';
			else if ((j == 1) && (i > 1 && i < height))
				returnString += '\u2502';
			else if ((j == width) && (i > 1 && i < height))
				returnString += '\u2502' + '\n';
			else if ((j > 1 && j < width) && (i > 1 && i < height))
				returnString += ' ';
		}
	}
	return returnString;
}



module.exports = {
	drawRectangle: drawRectangle
};
