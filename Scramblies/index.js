const scramble = (str1, str2) => {
  const letterCounts = {};
  for (const letter of str1) {
    letterCounts[letter] = (letterCounts[letter] || 0) + 1;
  }
  // после цикла: letterCounts = { r: 1, k: 1, q: 1, o: 1, d: 1, l: 1, w: 1 }

  return str2.split("").every(letter => {
    if (letterCounts[letter] > 0) {
      letterCounts[letter]--;
      return true;
    } else {
      // после невыполнения условия: letterCounts = { r: 0, k: 1, q: 1, o: 0, d: 0, l: 0, w: 0 }
      return false;
    }
  });
}

console.log(scramble('rkqodlw', 'world')); // true