const obj = {
  ' ': [6],
  ',': [5],
  d: [11],
  e: [1],
  H: [0],
  l: [2, 3, 10],
  o: [4, 8],
  r: [9],
  w: [7]
};

const buildString = (object = {}) => {
  return Object.keys(object).reduce((acc, key) => {
    object[key].forEach(i => {
      acc[i] = key;
    });
    return acc;
  }, []).join("")
};
console.log(buildString(obj)); // Hello, world

const buildString2 = (object = {}) => {
  let result = [];
  for (let i in object) {
    for (let j of object[i]) {
      result[j] = i;
    }
  }
  return result.join("");
};
console.log(buildString2()); // ""
