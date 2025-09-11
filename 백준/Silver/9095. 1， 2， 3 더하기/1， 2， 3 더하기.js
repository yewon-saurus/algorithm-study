const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let [T, ...input] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let answer = [];
let dp = new Array(11); // 정수 n은 양수이며 11보다 작다

dp[1] = 1; // 1
dp[2] = 2; // 1 + 1, 2
dp[3] = 4; // 1 + 1 + 1, 2 + 1, 1 + 2, 3

for (let i = 4; i < 11; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for (const n of input) {
  answer.push(dp[n]);
}

console.log(answer.join("\n"));