const fs = require('fs');
const [a, b, c] = fs.readFileSync("./dev/stdin").toString().split(" ").map(item => + item);
// const [a, b, c] = fs.readFileSync("./test.txt").toString().split(" ").map(item => + item);

console.log(a + b + c);