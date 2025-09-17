const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let S = fs.readFileSync(filePath).toString().trim();

// console.log('a'.charCodeAt()); // 97
// console.log('z'.charCodeAt()); // 122

let answer = new Array(26).fill(0);

for (const c of S) {
  answer[c.charCodeAt() % 97] += 1;
}

console.log(answer.join(" "));