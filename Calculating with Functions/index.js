const expression = (number, operation) => {
  if (!operation) {
    return number;
  }
  else {
    return operation(number);
  }
};

const zero = operation => expression(0, operation);
const one = operation => expression(1, operation);
const two = operation => expression(2, operation);
const three = operation => expression(3, operation);
const four = operation => expression(4, operation);
const five = operation => expression(5, operation);
const six = operation => expression(6, operation);
const seven = operation => expression(7, operation);
const eight = operation => expression(8, operation);
const nine = operation => expression(9, operation);

const plus = numberOne => numberTwo => numberTwo + numberOne;
const minus = numberOne => numberTwo => numberTwo - numberOne;
const times = numberOne => numberTwo => numberTwo * numberOne;
const dividedBy = numberOne => numberTwo => Math.floor(numberTwo / numberOne);

console.log(two(plus(six())));
console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));
console.log(eight(dividedBy(three())));