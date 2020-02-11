'use strict';

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function findTagName(str) {
   // throw new Error('Not implemented');
   var string;
   if((str.startsWith("<")&& str.endsWith(">"))){
    var start=str.indexOf("<")+1;
    var end=str.indexOf(">");
    string=str.substring(start, end);
  }
  return string;
}

module.exports = {
    findTagName: findTagName
};
