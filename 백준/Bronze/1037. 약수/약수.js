const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution([N, arr]) {
    arr = arr.split(' ').map(Number);
    let sortedArr = arr.sort((a, b) => a - b);

    return sortedArr[0] * sortedArr[sortedArr.length - 1];
}

console.log(solution(input));