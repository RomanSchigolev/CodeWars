const solve = string => {
  let counterLowerCase = 0;
  let counterUpperCase = 0;
  for (const subString of string) {
    subString === subString.toUpperCase() ? counterUpperCase += 1 : counterLowerCase += 1;
  }
  return counterLowerCase >= counterUpperCase ? string.toLowerCase() : string.toUpperCase();
}

// const solve = string => {
//   let upper = string.split("").filter(subString => subString.match(/[A-Z]/)).length;
//   let lower = string.split("").filter(subString => subString.match(/[a-z]/)).length;
//   return lower >= upper ? string.toLowerCase() : string.toUpperCase();
// }