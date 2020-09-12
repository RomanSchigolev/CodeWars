// Реализовать функцию, которая находит разницу в массивах и возвращает ее
// Порядок возвращаемых элементов не важен

const arrayDifference1 = (arr1, arr2) => {
  const result = [];

  arr1.forEach(item => {
    if (!arr2.includes(item)) {
      result.push(item);
    }
  });

  arr2.forEach(item => {
    if (!arr1.includes(item)) {
      result.push(item);
    }
  });

  return result;
};

console.log(arrayDifference1(['javascript', 'is', 'awesome'], ['javascript', 'awesome']));
// ['is']
console.log(arrayDifference1([1, 2, 3, 4, 5], [3, 4, 2, 7]));
// [1, 5, 7]

// or

const arrayDifference2 = (arr1, arr2) => {
  return arr1.concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
};

console.log(arrayDifference2(['javascript', 'is', 'awesome'], ['javascript', 'awesome']));
// ['is']
console.log(arrayDifference2([1, 2, 3, 4, 5], [3, 4, 2, 7]));
// [1, 5, 7]

// or

const arrayDifference3 = (arr1, arr2) => {
  return arr1
    .filter(item => !arr2.includes(item))
    .concat(arr2.filter(item => !arr1.includes(item)));
};

console.log(arrayDifference3(['javascript', 'is', 'awesome'], ['javascript', 'awesome']));
// ['is']
console.log(arrayDifference3([1, 2, 3, 4, 5], [3, 4, 2, 7]));
// [1, 5, 7]

// or

const arrayDifference4 = (arr1, arr2) => {
  function diff(a, b) {
    return a.filter(item => !b.includes(item));
  }

  return [diff(arr1, arr2), diff(arr2, arr1)].flat();
};

console.log(arrayDifference4(['javascript', 'is', 'awesome', 'lol'], ['javascript', 'and', 'python', 'awesome']));
// [ 'is', 'lol', 'and', 'python' ]
console.log(arrayDifference4([1, 2, 3, 4, 5], [3, 4, 2, 7]));
// [1, 5, 7]