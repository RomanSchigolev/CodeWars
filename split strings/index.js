
// Наработки
var str = '3453458928590829038590285092345';
var arr = [];

for (var i = 0; i < str.length; i+=2) {
    arr.push(str.slice(i, i + 2)); if (arr.length == 1) {console.log(arr.slice(-1))}
}

if (arr[arr.length - 1].length == 1) { let lastElem =  `${arr[arr.length - 1]}_`; arr.pop(); }

if (arr[arr.length - 1].length == 1) { let lastElem =  `${arr[arr.length - 1]}_`; arr.push(lastElem); console.log(arr); }

let array = ["ab", "cd", "ef", "g"];
let lastElem = `${array[array.length - 1]}_`;
lastElem
"g_"
array.pop()
"g"
array.push(lastElem)
array
(4) ["ab", "cd", "ef", "g_"]
array.splice(-1, 1, lastElem)