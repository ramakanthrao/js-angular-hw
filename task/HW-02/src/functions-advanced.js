'use strict';

/**
 * This time we want to write calculations using functions and get the results.
 * 
 * Let's have a look at some examples:
 *
 * @example
 *   seven(times(five())); => 35
 *	 four(plus(nine()));  => 13
 *	 eight(minus(three()));  => 5
 *	 six(dividedBy(two()));  => 3
 *
 *	Requirements:
 *		There must be a function for each number from 0 ("zero") to 9 ("nine")
 *		There must be a function for each of the following mathematical operations:
 * 			plus, minus, times, dividedBy
 *		Each calculation consist of exactly one operation and two numbers
 *		The most outer function represents the left operand, the most 
 *		inner function represents the right operand
 *		Divison should be integer division. 
 *			For example, eight(dividedBy(three())); should return 2, not 2.666666...
 */

 const MULTIPLICATION_OPERATION = "multiplication";
 const ADDITION_OPERATION = "addition";
 const SUBTRACTION_OPERATION = "subtraction";
 const DIVIDE_OPERATION = "divide";

function zero(operation){
    return executeOperation(0, operation);
}

function executeOperation(operand, operation){
    
    if(operation === undefined){
        return operand;
    }
    if(operation.operation === DIVIDE_OPERATION){
       return  Number.parseInt(operand/operation.operand);
    } else if(operation.operation === MULTIPLICATION_OPERATION){
        return  operand*(operation.operand);
    } else if(operation.operation === SUBTRACTION_OPERATION){
        return  operand-(operation.operand);
    } else if(operation.operation === ADDITION_OPERATION){
        return  operand+(operation.operand);
    }
}

function one (operation){
    return executeOperation(1, operation);
} 	
function two (operation){
    return executeOperation(2, operation);
} 	
function three (operation){
    return executeOperation(3, operation);
} 
function four (operation){
    return executeOperation(4, operation);
} 	
function five (operation){
    return executeOperation(5, operation);
    
} 	
function six (operation){
    return executeOperation(6, operation);
} 	
function seven (operation){
    return executeOperation(7, operation);
}
function eight (operation){
    return executeOperation(8, operation);
} 
function nine (operation){
    return executeOperation(9, operation);
}

function dividedBy (operand){
    return {
        operation: DIVIDE_OPERATION,
        operand: operand
    };
}
function minus (operand){
    return {
        operation: SUBTRACTION_OPERATION,
        operand: operand
    };
}
function plus (operand){ 
    return {
    operation: ADDITION_OPERATION,
    operand: operand
     };
}
function times (operand){
    return {
        operation: MULTIPLICATION_OPERATION,
        operand: operand
    };
}
function add (operand){
    return {
        operation: ADDITION_OPERATION,
        operand: operand
    };
}





module.exports ={
zero:zero,	
one :one, 	
two :two, 
three:three,
four:four,
five:five,
six :six,
seven:seven,
eight:eight,
nine:nine,
dividedBy:dividedBy,
minus:minus,
plus:plus,
times:times,
add:add
};