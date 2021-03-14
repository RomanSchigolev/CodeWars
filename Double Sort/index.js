const dbSort = (a) => {
  let strings = [];
  let numbers = [];

  a.forEach((item) => (typeof item === 'number' ? numbers : strings).push(item));

  // a.forEach((item) => {
  //   if (typeof item === 'number') {
  //     numbers.push(item);
  //   } else if (typeof item === 'string') {
  //     strings.push(item);
  //   }
  // });

  // console.log(numbers);
  // console.log(strings);

  numbers = numbers.sort((a, b) => a - b);
  strings = strings.sort();

  return [...numbers, ...strings];
};

console.log(dbSort(['C', 'W', 'W', 'W', 1, 2, 0])); // [0, 1, 2, 'C', 'W', 'W', 'W']
