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
    var shape = "";
    for (var i=0; i<height; i++){
        if (i === 0){
            shape = shape+'┌';
        } 
        else if(i===(height-1)){
            shape = shape+'└'; 
        }
        else {
            shape = shape+'│'; 
        }       
        for (var j=1; j<(width-1); j++){
           if((i===0) || (i===(height-1))) {
            shape = shape+"─";
           }
           else{
            shape = shape+" ";
           }
            
        }
        if (i === 0){
            shape = shape+'┐';
        } 
        else if(i===(height-1)){
            shape = shape+'┘'; 
        }
        else {
            shape = shape+'│'; 
        }            
        shape=shape+'\n';
        
    }
    return shape;

}



module.exports = {
    drawRectangle: drawRectangle
};
