function getOrder(input) {
  const menuList = ["burger", "fries", "chicken", "pizza", "sandwich", "onionrings", "milkshake", "coke"]
  const fixedList = [];
  for (let menuItem of menuList) {
    fixedList.push(input.match(new RegExp(menuItem, "gi")));
  }
  return [].concat(...fixedList)
    .filter(item => item)
    .map(item => item.charAt(0)
      .toUpperCase() + item.slice(1).toLowerCase())
    .join(" ");
}

console.log(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"));
// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"