function persistence(num, counter = 0) {
  let numStr = num.toString();
  if (numStr.length === 1) {
    return counter;
  }
  let newNum = numStr.split('').reduce((acc, val) => acc * val, 1);
  return persistence(newNum, counter + 1);
}

console.log(persistence(39)); // 3

function persistence2(num) {
  if (num < 10) {
    return 0;
  } else {
    let counter = 0;
    let numStr = num.toString();
    while (numStr.length !== 1) {
      numStr = String([...numStr].reduce((acc, val) => acc * val, 1));
      counter = counter + 1;
    }
    return counter;
  }
}

console.log(persistence2(39)); // 3
