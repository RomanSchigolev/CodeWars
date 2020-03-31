// Для Number.MAX_SAFE_INTEGER (2^53 - 1).
// function sumStrings(str1, str2) {
//   let arrayOfStrings = Array.of(str1, str2);
//   let resOfSum = arrayOfStrings.reduce((accumulator, string) => {
//     return Number(string) + accumulator;
//   }, 0);
//   return BigInt(resOfSum);
// }

// ------------------------------

// Наработки
// let str1 = "99";
// let str2 = "1";
// let str1Length = str1.length;
// let str2Length = str2.length;
// let str1Array = Array.from(str1, Number);
// let str2Array = Array.from(str2, Number);
// let sumOfDigit = 0;
// let i = Math.max(str1Length, str2Length);
// let result = [];
// while (i--) {
//   console.log("i = ", i)
//   console.log(str1Array);
//   console.log("----------")
//   console.log(str2Array);
//   console.log("sumOfDigit is do it")
//   sumOfDigit += (str1Array.pop() || 0) + (str2Array.pop() || 0);
//   console.log(sumOfDigit)
//   result.unshift(sumOfDigit % 10);
//   console.log(result)
//   sumOfDigit = Math.floor(sumOfDigit / 10);
//   console.log(`Окгругление в меньшую сторону: ${sumOfDigit} / 10 = `, sumOfDigit);
//   console.log("new iterations")
// }
// console.log(sumOfDigit)
// console.log(result)
// while (sumOfDigit) {
//   result.unshift(sumOfDigit % 10);
//   sumOfDigit = Math.floor(sumOfDigit / 10);
// }
// if (result[0] === 0) {
//   result.shift();
//   console.log(result.join(""))
// }
// else {console.log(result.join(""))}
// console.log(result)


function sum(str1,str2) {
  let str1Length = str1.length;
  let str2Length = str2.length;
  let str1Array = Array.from(str1, Number);
  let str2Array = Array.from(str2, Number);
  let sumOfDigit = 0;
  let result = [];
  let maxLengthStr = Math.max(str1Length, str2Length);
  while (maxLengthStr--) {
    sumOfDigit += (str1Array.pop() || 0) + (str2Array.pop() || 0);
    result.unshift(sumOfDigit % 10);
    sumOfDigit = Math.floor(sumOfDigit / 10);
  }
  while (sumOfDigit) {
    result.unshift(sumOfDigit % 10);
    sumOfDigit = Math.floor(sumOfDigit / 10);
  }
  return result.join("");
}
console.log(sum("99", "1")); // 100

