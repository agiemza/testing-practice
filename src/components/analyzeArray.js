/* 
    Write an analyzeArray function that takes an array of numbers and returns an object 
    with the following properties: average, min, max, and length.
*/

export function analyzeArray(array) {
	if (!Array.isArray(array)) {
		return "it is not an array"
	}
	if (array.length < 1) {
		return "empty"
	}
	return {
		average: average(array),
		min: min(array),
		max: max(array),
		length: array.length,
	}
}

function average(array) {
	return array.reduce((prev, cur) => prev + cur, 0) / array.length
}

function min(array) {
	return Math.min(...array)
}

function max(array) {
	return Math.max(...array)
}
