const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let [N, ...cmds] = fs.readFileSync(filePath).toString().trim().split("\n");

class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.back = 0;
    }

    push(x) {
        this.queue.push(x);
        this.back += 1;
    }

    pop() {
        if (this.empty()) return -1;

        const returnValue = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        return returnValue;
    }

    size() {
        return this.back- this.front;
    }

    empty() {
        return this.front === this.back ? 1 : 0;
    }

    getFront() {
        return this.empty() ? -1 : this.queue[this.front];
    }

    getBack() {
        return this.empty() ? -1 : this.queue[this.back - 1];
    }
}

let queue = new Queue();
let answer = [];

for (let i = 0; i < N; i++) {
    const [c, num] = cmds[i].split(' ');
    
    switch (c) {
        case "push":
            queue.push(num);
            break;
        case "pop":
            answer.push(queue.pop());
            break;
        case "size":
            answer.push(queue.size());
            break;
        case "empty":
            answer.push(queue.empty());
            break;
        case "front":
            answer.push(queue.getFront());
            break;
        case "back":
            answer.push(queue.getBack());
            break;
        default:
    }
}

console.log(answer.join("\n"));