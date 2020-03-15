const Isogram = (word) => {
  return new Set(word.toLowerCase()).size === word.length;
}
console.log(Isogram("moOse"));
console.log(Isogram(""));
console.log(Isogram("isogram"));
console.log(Isogram("abBa"));
console.log(Isogram("nayxefgwutoslckvirpjmhqdzb"));