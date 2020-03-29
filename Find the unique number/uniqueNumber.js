// function findUniq(arr) {
//   let commonNumber;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] == arr[j]) {
//         commonNumber = arr[i];
//       }
//     }
//   }
//   let uniqueArr = new Set(arr);
//   uniqueArr.delete(commonNumber);
//   return Number(Array.from(uniqueArr));
// }

function findUniq(arr) {
  let unique = Array.from(new Set(arr));
  if(arr[0] === arr[1] || arr[0] === arr[2]) {
    return unique[0] === arr[0] ? unique[1] : unique[0];
  } else {return arr[0];}
}

console.log(findUniq([0.66, 0.66, 0.55])); // 0.55