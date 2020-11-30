const solve = string => {
  let counterLower = 0;
  let counterUpper = 0;
  for (let subString of string) {
    if (subString === subString.toUpperCase()) counterUpper += 1;
    else counterLower += 1;
  }
  return counterLower >= counterUpper ? string.toLowerCase() : string.toUpperCase();
}

// const solve = string => {
//   let upper = string.split("").filter(subString => subString.match(/[A-Z]/)).length;
//   let lower = string.split("").filter(subString => subString.match(/[a-z]/)).length;
//   return lower >= upper ? string.toLowerCase() : string.toUpperCase();
// }