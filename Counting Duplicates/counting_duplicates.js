function countDuplicates(str) {
  str = str.toLowerCase();
  let arr = str.split("");
  let counts = {},
    duplicate = 0;
    arr.forEach(function(x) {
    counts[x] = (counts[x] || 0) + 1;
  });
  console.log(counts); // { a: 2, b: 2, e: 2, d: 2 }
  for (let key in counts) {
    if (counts.hasOwnProperty(key)) {
      counts[key] > 1 ? duplicate++ : duplicate;
    }
  }
  return duplicate;
}

console.log(countDuplicates("abbaeedd")); // 4
