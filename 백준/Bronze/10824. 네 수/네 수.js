const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let [A, B, C, D] = fs.readFileSync(filePath).toString().trim().split(" ");

console.log(+(A + B) + +(C + D));