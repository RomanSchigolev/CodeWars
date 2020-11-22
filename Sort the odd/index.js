const sortArray = array => {
  const oddElms = array.filter(number => number % 2).sort((a, b) => a - b);
  return array.map(number => number % 2 ? oddElms.shift() : number);
};

console.log(sortArray([5, 2, 3, 8, 1, 4])); // [ 1, 2, 3, 8, 5, 4 ]