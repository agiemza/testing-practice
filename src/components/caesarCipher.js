/* Write a caesarCipher function that takes a string and returns it with each character “shifted”. */

export function caesarCipher(string) {
	const alphabet = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	]
	const stringArr = string.split("")

	return stringArr
		.map((char) => {
			const charIndex = alphabet.indexOf(char.toLowerCase())
			if (charIndex !== -1) {
				const encryptedChar =
					charIndex + 1 < alphabet.length
						? alphabet[charIndex + 1]
						: alphabet[0]
				return returnCorrectCase(char, encryptedChar)
			}
			if (!isNaN(parseInt(char))) {
				return encryptNumber(char)
			}
			return char
		})
		.join("")
}

function encryptNumber(char) {
	char = parseInt(char)
	return char === 9 ? 0 : char + 1
}

function returnCorrectCase(char, encryptedChar) {
	return char.toUpperCase() === char
		? encryptedChar.toUpperCase()
		: encryptedChar
}
