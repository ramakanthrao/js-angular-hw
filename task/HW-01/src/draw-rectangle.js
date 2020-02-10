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
 *  (12,3) =>  '│          |\n'+
 *             '└──────────┘\n'
 *
 */
function drawRectangle(width, height) {
    let rectangle = "";

    for (let h = 0; h < height; h++) {
      for (let w = 0; w < width; w++) {
        if (h == 0 && w == 0) {
          rectangle += "┌";
        } else if (h == height - 1 && w == 0) {
          rectangle += "└";
        } else if (h == 0 && w == width - 1) {
          rectangle += "┐";
        } else if (h == height - 1 && w == width - 1) {
          rectangle += "┘";
        } else if ( (h == 0 || h == height - 1) && w > 0 && w < width - 1) {
          rectangle += "─";
        } else if ( (w == 0 || w == width - 1) && h > 0 && h < height - 1) {
          rectangle += "│";
        } else if (w == width) {
          rectangle += "\n";
        } else {
          rectangle += " ";
        }
      }
      rectangle += "\n";
    }
    return rectangle;
}



module.exports = {
    drawRectangle: drawRectangle
};
