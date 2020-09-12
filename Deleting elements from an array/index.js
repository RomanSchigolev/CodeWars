// Релизовать функцию, удаляющую элементы из массива

const destroyer = (list, ...arguments) => list.filter(item => !arguments.includes(item));

console.log(destroyer([1, 2, 3, 4, 5, 6, 7], 1, 3, 5, 6));
// [2, 4, 7]
console.log(destroyer(['this', 'is', 'simple', 'algorithm'], 'this', 'is'));
// ['simple', 'algorithm']