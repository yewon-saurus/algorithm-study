const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let input = fs.readFileSync(filePath).toString().trim();
[[N,  M], [...A], [...B]] = input.split("\n").map(ii => ii.split(" ").map(Number));

console.log([...A, ...B].sort((a, b) => a - b).join(' '));
