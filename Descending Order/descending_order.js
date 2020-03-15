function descendingOrder(n){
  let arrNumbers = n.toString().split("");
  arrNumbers.sort(function(a, b) {
    return b - a;
  });
  return Number(arrNumbers.join("").toString());
}

console.log(descendingOrder(1234567891));