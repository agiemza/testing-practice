/*  
    Write a calculator object that contains functions for the basic operations: 
    add, subtract, divide, and multiply. 
    Each of these functions should take two numbers and return the correct calculation.
*/

export function add(a, b) {
	if (isNaN(a) || isNaN(b)) {
        return "NaN"
    }
	return a + b
}
export function subtract(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "NaN"
    }
	return a - b
}
export function divide(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "NaN"
    }
	return b !== 0 ? a / b : "ARE YOU SERIOUS?!"
}
export function multiply(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "NaN"
    }
	return a * b
}
