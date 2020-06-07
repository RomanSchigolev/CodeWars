const moveZeros = array => {
  const arrayOfOthers = [];
  const arrayOfZero = [];
  for (item in array) {
    if (array[item] === 0) {
      arrayOfZero.push(array[item]);
    } else {
      arrayOfOthers.push(array[item])
    }
  }
  return [...arrayOfOthers, ...arrayOfZero];
}
console.log(moveZeros(["a", 0, "b", "c", "d", 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0]));
// ['a', 'b', 'c', 'd', 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


// other solution

  // let count = 0;
  // for (let i in arr) {
  //   if (arr[i] !== 0) {
  //     arr[count] = arr[i];
  //     count++;
  //   }
  // }
  // while (count < arr.length) {
  //   arr[count] = 0;
  //   count++;
  // }
  // return arr;