String.prototype.camelCase = function () {
  let arrWords = this.trim().split(" ");
  let modifyArrWords = arrWords.map(item => {
    return item = `${item.charAt(0).toUpperCase()}${item.slice(1)}`;
  })
  return modifyArrWords.join("");
}

console.log(" hello case Word  ".camelCase()); // HelloCaseWord