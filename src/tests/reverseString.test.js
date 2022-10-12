import reverseString from "../components/reverseString"

test("String reverse example 1", () => {
	expect(reverseString("string")).not.toMatch(/string/)
})

test("String reverse example 2", () => {
	expect(reverseString("string")).toMatch(/gnirts/)
})

test("String reverse example 3", () => {
	expect(reverseString("some string")).not.toMatch(/gnirtsemos/)
})

test("String reverse example 4", () => {
	expect(reverseString("some string")).toMatch(/gnirts emos/)
})

test("String reverse example 5", () => {
	expect(reverseString("123 string")).toMatch(/gnirts 321/)
})
