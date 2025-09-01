const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let [T, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(
    input.map(
        sentence => sentence.split(" ").map(
            word => [...word].reverse().join("")
        ).join(" ")
    ).join("\n")
);