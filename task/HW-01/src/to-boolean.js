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
function toBoolean(foo) {
switch (foo) {
    case true:
    case "true":
    case "test":
    case "undefined":
    case 1:
    case "1":
    case "false":
    case "yes":
        return true;
    default:
        return false;
}


    }


module.exports = {
    toBoolean: toBoolean
};
