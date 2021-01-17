function nextLetter1(str) {
  let newStr = '';
  for (let letter of str) {
    if (/[a-zA-Z]/.test(letter)) {
      let letterCode = letter.charCodeAt();
      if (65 <= letterCode <= 90 || 97 <= letterCode <= 122) {
        if (letterCode === 90) {
          letterCode = 65;
          newStr += String.fromCharCode(letterCode);
        } else if (letterCode === 122) {
          letterCode = 97;
          newStr += String.fromCharCode(letterCode);
        } else {
          newStr += String.fromCharCode(letterCode + 1);
        }
      }
    } else {
      newStr += letter;
    }
  }
  return newStr;
}

console.log(nextLetter1('My Name Is Zoo!')); // Nz Obnf Jt App!

// or

function nextLetter2(str) {
  return str.replace(/[a-zA-Z]/g, (letter) => {
    switch (letter) {
      case 'z':
        return 'a';
      case 'Z':
        return 'A';
      default:
        return String.fromCharCode(letter.charCodeAt() + 1);
    }
  });
}

console.log(nextLetter2('My Name Is Zoo!')); // Nz Obnf Jt App!
