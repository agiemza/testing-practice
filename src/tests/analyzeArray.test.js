import { analyzeArray } from "../components/analyzeArray"

test("Analyze array example 1", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	})
})

test("Analyze array example 2", () => {
	expect(analyzeArray([])).toBe("empty")
})

test("Analyze array example 3", () => {
	expect(analyzeArray("")).toBe("it is not an array")
})
