const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let input = fs.readFileSync(filePath).toString().split("\n");

const answer = [];

// console.log('a'.charCodeAt()); // 97
// console.log('z'.charCodeAt()); // 122
// console.log('A'.charCodeAt()); // 65
// console.log('Z'.charCodeAt()); // 90
// console.log('0'.charCodeAt()); // 48
// console.log('9'.charCodeAt()); // 57
// console.log(' '.charCodeAt()); // 32

for (const str of input) {
  const check = new Array(4).fill(0);

  if (str.length === 0) continue;

  for (const c of str) {
    const cCode = c.charCodeAt();

    if (cCode >= 97 && cCode <= 122) check[0] += 1;
    else if (cCode >= 65 && cCode <= 90) check[1] += 1;
    else if (cCode >= 48 && cCode <= 57) check[2] += 1;
    else if (cCode === 32) check[3] += 1;
  }

  answer.push(check.join(" "));
}

console.log(answer.join("\n"))