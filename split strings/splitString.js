function solution(str){
    let splitStr = [];
    if (!str) {
        return splitStr;
    }
    for (let i = 0; i < str.length; i +=2 ) {
        splitStr.push(str.slice(i, i + 2));
    }
    if (splitStr[splitStr.length - 1].length === 1) {
        let lastElem =  `${splitStr[splitStr.length - 1]}_`;
        splitStr.pop();
        splitStr.push(lastElem);
        return splitStr;
    } else {return splitStr;}
}
str = "a";
console.log(solution(str));
