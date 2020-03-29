function likes (names) {
  return {
    0 : 'no one likes this',
    1 : `${names[0]} likes this`,
    2 : `${names[0]} and ${names[1]} like this`,
    3 : `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4 : `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(names.length, 4)]
}

console.log(likes(["Alex"])); // Alex likes this
console.log(likes(["alex", 'john', 'bred', 'jim', 'bob'])); // alex, john and 3 others like this