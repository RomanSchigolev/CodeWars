function func(num) {
  num = num.toString();
  const storage = [];
  let multiplier = 1;
  
  for (let i = 1; i <= num.length; i++) {
    const digit = num[num.length - i];
    digit > 0 && storage.unshift(digit * multiplier);
    multiplier *= 10;
  }
  return storage.join(" + ");
}
console.log(func(703040));