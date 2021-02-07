const zipWith = (fn, arr1, arr2) => {
  const resultArr = [];
  const shortLengthArr = Math.min(arr1.length, arr2.length);
  for (let index = 0; index < shortLengthArr; index++) {
    resultArr.push(fn(arr1[index], arr2[index]));
  }
  return resultArr;
};

const add = (a, b) => a + b;

console.log(zipWith(Math.pow, [10, 10, 10], [0, 1, 2, 3])); // [1, 10, 100]
