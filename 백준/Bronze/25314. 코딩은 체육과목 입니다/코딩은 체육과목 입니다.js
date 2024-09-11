const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./test.txt").toString().trim().split("\n");

function solution(N) {
    return `${'long '.repeat(Math.floor(N / 4))}int`;
}

console.log(solution(input));