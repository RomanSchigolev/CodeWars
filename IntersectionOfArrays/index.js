const arr1 = [14, 14, 8, 8, 3, 11, 7, 17, 4, 0, 5];
const arr2 = [14, 18, 14, 8, 8, 3, 2, 14, 19, 2];

function IntersecArrays(arr1, arr2) {
  const lengthFirstArr = arr1.length;
  const lengthSecondArr = arr2.length;
  let resultIndex = 0;
  let result = [];

  for (let indexFirstArr = 0; indexFirstArr < lengthFirstArr; indexFirstArr++) {
    let indexSecondArr = 0, ExcludingDuplicates = 0;
    while (arr2[indexSecondArr] !== arr1[indexFirstArr] && indexSecondArr < lengthSecondArr) indexSecondArr++;
    while (result[ExcludingDuplicates] !== arr1[indexFirstArr] && ExcludingDuplicates < resultIndex) ExcludingDuplicates++;
    if (indexSecondArr != lengthSecondArr && ExcludingDuplicates == resultIndex) result[resultIndex++] = arr1[indexFirstArr];
  }
  return result;
}

console.log(IntersecArrays(arr1, arr2)); // [ 14, 8, 3 ]

// methods filter and includes
const IntersecArraysSecond = (arr1, arr2) => {
  return [...new Set(arr1)].filter(item => arr2.includes(item));
}
console.log(IntersecArraysSecond(arr1, arr2)); // [ 14, 8, 3 ]

