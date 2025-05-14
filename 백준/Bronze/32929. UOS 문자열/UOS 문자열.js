const fs = require('fs');
const x = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

console.log('UOS'[(x - 1) % 3]);