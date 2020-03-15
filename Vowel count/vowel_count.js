function getCount(str) {
  let vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}
console.log(getCount('AAAAA'));
