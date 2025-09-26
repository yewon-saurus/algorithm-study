const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let input = fs.readFileSync(filePath).toString().trim();

const answer = [];

for (let i = 0; i < input.length; i++) {
  answer.push(input.slice(i));
}

console.log(answer.sort().join("\n"));