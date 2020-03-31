
function findUnique(numbers) {
  let counts = {};
  numbers.forEach(num_key => {counts[num_key] = (counts[num_key] || 0) + 1;});
  return Number(numbers.filter(num_key => counts[num_key] < 2));
}
console.log(findUnique([3, 5, 5, 4, 4, 3, 2, 2, 9])); // 9
