const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let [N, K] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let list = Array.from({ length: N }, (_, idx) => idx + 1);
let answer = [];

while (list.length > 0) {
    for (let i = 0; i < K - 1; i++) {
        const head = list.shift();
        list.push(head);
    }
    const target = list.shift();
    answer.push(target);
}

console.log(`<${answer.join(', ')}>`);