String.prototype.camelCase = function () {
  if (!this.length) {
    return this.toString();
  }
  else {
    let arrWords = this.trim().split(" ");
    let modifyArrWords = [];
    for (let word of arrWords) {
      word = `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
      modifyArrWords.push(word);
    }
    return modifyArrWords.join("");
  }
}

console.log("  hello case   ".camelCase()); // HelloCase