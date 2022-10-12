import capitalize from "../components/capitalize"

test("Capitalize example 1", () => {
	expect(capitalize("string")).toMatch(/STRING/g)
})

test("Capitalize example 2", () => {
	expect(capitalize("some string")).toMatch(/SOME STRING/g)
})

test("Capitalize example 3", () => {
	expect(capitalize("123 string")).toMatch(/123 STRING/g)
})

test("Capitalize example 4", () => {
	expect(capitalize("sOmE StRinG")).toMatch(/SOME STRING/g)
})

test("Capitalize example 5", () => {
	expect(capitalize("some_string")).not.toMatch(/some_string/g)
})
