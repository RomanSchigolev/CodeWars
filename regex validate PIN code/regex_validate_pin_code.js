function validatePIN(pin) {
  if (/^(\d{4}|\d{6})$/.test(pin)) {
    return true;
  } else {
    return false;
  }
}

console.log(validatePIN("1234"));
console.log(validatePIN("a234"));
console.log(validatePIN("12345"));
console.log(validatePIN("123456"));