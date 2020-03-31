function rgb(r, g, b) {
  const digitToHex = (digit) => {
    let hexCode = "";
    if (digit <= 255) {
      hexCode = Number(digit).toString(16).toUpperCase();
      if (hexCode.length < 2) {
        hexCode = `0${hexCode}`.toUpperCase();
      }
    }
    if (digit > 255) {
      hexCode = `ff`.toUpperCase();
    }
    if (digit < 0) {
      hexCode = `00`.toUpperCase();
    }
    return hexCode;
  }
  const RED = digitToHex(r);
  const GREEN = digitToHex(g);
  const BLUE = digitToHex(b);
  return `${RED}${GREEN}${BLUE}`;
}

console.log(rgb(0, 0, -34)); // 000000