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
    for(i=0; i<height; i++){
        if(i==0){
            document.write("\u250C");
        }
        else if(i==height-1){
            document.write("\u2514");
        }
        else{
            document.write("\u2502");
        }
        for(j=0; j< width-1; j++){
            if(j==width-2 && i==0){
                document.write("\u2510"+"\n");
            }
            else if(j=width-2 && i == height-1){
                document.write("\u2518" + "\n");
            }
            else{
                document.write(" ");
            }
        }
    }
}



module.exports = {
    drawRectangle: drawRectangle
};
