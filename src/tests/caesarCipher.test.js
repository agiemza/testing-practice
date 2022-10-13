import { caesarCipher } from "../components/caesarCipher"

test("Cesar cipher example 1", () => {
    expect(caesarCipher("abc")).toBe("bcd")
})

test("Cesar cipher example 2", () => {
    expect(caesarCipher("wxyzabc")).toBe("xyzabcd")
})

test("Cesar cipher example 3", () => {
    expect(caesarCipher("ab, c")).toBe("bc, d")
})

test("Cesar cipher example 4", () => {
    expect(caesarCipher("AbC")).toBe("BcD")
})

test("Cesar cipher example 5", () => {
    expect(caesarCipher("Abc 123")).toBe("Bcd 234")
})

test("Cesar cipher example 6", () => {
    expect(caesarCipher("yza 8901")).toBe("zab 9012")
})
