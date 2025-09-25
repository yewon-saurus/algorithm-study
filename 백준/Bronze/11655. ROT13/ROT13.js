const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let input = fs.readFileSync(filePath).toString();

// console.log('A'.charCodeAt()); // 65
// console.log('Z'.charCodeAt()); // 90
// console.log('a'.charCodeAt()); // 97
// console.log('z'.charCodeAt()); // 122

let answer = "";

for (const c of input) {
  const cCharCode = c.charCodeAt();

  if (cCharCode >= 65 && cCharCode <= 90) {
    answer += String.fromCharCode((cCharCode - 65 + 13) % 26 + 65);
  }
  else if (cCharCode >= 97 && cCharCode <= 122) {
    answer += String.fromCharCode((cCharCode - 97 + 13) % 26 + 97);
  }
  else {
    answer += c;
  }
}

console.log(answer);