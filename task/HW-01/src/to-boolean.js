'use strict';

/**
 * Tries to convert value to boolean and returns it if conversion was successfull;
 *
 * @param {any} value
 * @return {boolean}
 *
 * @example
 *   toBoolean(null) => false
 *   toBoolean('test') => true
 *   toBoolean('') => false
 *   toBoolean(new Number(0)) => false
 */
function toBoolean(value) {
    if(value) {
        return true;
    }else{
        return false;
    }
  
}

module.exports = {
    toBoolean: toBoolean
};
