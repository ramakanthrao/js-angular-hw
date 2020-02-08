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
    var rectangle = "";
    for (var i=0; i<height; i++){
        if (i === 0){
            rectangle = rectangle+'┌';
        } 
        else if(i===(height-1)){
            rectangle = rectangle+'└'; 
        }
        else {
            rectangle = rectangle+'│'; 
        }       
        for (var j=1; j<(width-1); j++){
           if((i===0) || (i===(height-1))) {
            rectangle = rectangle+"─";
           }
           else{
            rectangle = rectangle+" ";
           }
            
        }
        if (i === 0){
            rectangle = rectangle+'┐';
        } 
        else if(i===(height-1)){
            rectangle = rectangle+'┘'; 
        }
        else {
            rectangle = rectangle+'│'; 
        }            
        rectangle=rectangle+'\n';
        
    }
    return rectangle;
}



module.exports = {
    drawRectangle: drawRectangle
};
