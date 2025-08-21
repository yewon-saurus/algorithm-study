const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let [N, ...cmds] = fs.readFileSync(filePath).toString().trim().split("\n");

let answer = [];
let queue = [];

for (let i = 0; i < N; i++) {
    const [c, num] = cmds[i].split(' ');
    
    switch (c) {
        case "push":
            queue.push(num);
            break;
        case "pop":
            answer.push(queue.length > 0 ? queue.shift() : -1);
            break;
        case "size":
            answer.push(queue.length);
            break;
        case "empty":
            answer.push(queue.length === 0 ? 1 : 0);
            break;
        case "front":
            answer.push(queue.length > 0 ? queue[0] : -1);
            break;
        case "back":
            answer.push(queue.length > 0 ? queue[queue.length - 1] : -1);
            break;
        default:
    }
}

console.log(answer.join("\n"));