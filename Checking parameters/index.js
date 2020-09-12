/*
  Проверить, если второй параметр является true для каждого элемента коллекции
  Если у всех элементов он truthy (проходит проверку в if), то функция возвращает true
  Иначе - false
*/

const isEverythingTruthy = (list, param) => list.every(obj => obj[param]);

console.log(isEverythingTruthy([{name: 'Oleg', age: 25}, {name: 'Elena', age: 21}, {name: 'Victor', age: 12}], 'age')); // true
console.log(isEverythingTruthy([{car: 'Ford', owner: 'Oleg'}, {car: 'Audi', owner: null}, {car: 'BMW', owner: 'Amazon'}], 'owner'));// false