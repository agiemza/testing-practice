import { add, subtract, divide, multiply } from "../components/calculator"

// test add

test("Add example 1", () => {
	expect(add(3, 2)).toEqual(5)
})

test("Add example 2", () => {
	expect(add(-3, 2)).toEqual(-1)
})

test("Add example 3", () => {
	expect(add(1000, 0)).toEqual(1000)
})

test("Add example 4", () => {
	expect(add(0, 0)).toEqual(0)
})

test("Add example 5", () => {
	expect(add(1, "a")).toBe("NaN")
})

// test subtract

test("Substract example 1", () => {
	expect(subtract(1, "a")).toBe("NaN")
})

test("Substract example 2", () => {
	expect(subtract(5, 3)).toEqual(2)
})

test("Substract example 3", () => {
	expect(subtract(-5, 3)).toEqual(-8)
})

test("Substract example 4", () => {
	expect(subtract(1, 0)).toEqual(1)
})

test("Substract example 5", () => {
	expect(subtract(-5, -3)).toEqual(-2)
})

// test divide

test("Divide example 1", () => {
	expect(divide(1, "a")).toBe("NaN")
})

test("Divide example 2", () => {
	expect(divide(1, 0)).toBe("ARE YOU SERIOUS?!")
})

test("Divide example 3", () => {
	expect(divide(4, 2)).toEqual(2)
})

test("Divide example 4", () => {
	expect(divide(14, -7)).toEqual(-2)
})

test("Divide example 5", () => {
	expect(divide(5, -0.9)).toBeCloseTo(-5.555555555555555)
})

// test multiply

test("Multiply example 1", () => {
	expect(multiply(1, "a")).toBe("NaN")
})

test("Multiply example 2", () => {
	expect(multiply(0, 3)).toEqual(0)
})

test("Multiply example 3", () => {
	expect(multiply(-3, 3)).toEqual(-9)
})

test("Multiply example 4", () => {
	expect(multiply(-3, -2)).toEqual(6)
})

test("Multiply example 5", () => {
	expect(multiply(2, 0.32)).toEqual(0.64)
})
