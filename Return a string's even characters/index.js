function evenChars1(string) {
  if (string.length < 2 || string.length > 100) {
    return "invalid string";
  } else {
    const evenIndexes = [];
    for (let index = 1; index < string.length; index += 2) {
      evenIndexes.push(string[index]);
    }
    return evenIndexes;
  }
}

console.log(evenChars1("abcdefghijklm")); // ["b", "d", "f", "h", "j", "l"]
console.log(evenChars1("a")); // "invalid string"

// or

function evenChars2(string) {
  return (string.length < 2 || string.length > 100 ? "invalid string" : [...string].filter((char, index) => index % 2)
  );
}

console.log(evenChars2("abcdefghijklm")); // ["b", "d", "f", "h", "j", "l"]
console.log(evenChars2("a")); // "invalid string"