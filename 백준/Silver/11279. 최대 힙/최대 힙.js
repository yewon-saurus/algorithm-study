const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);

        let cur = this.heap.length - 1;
        let par = Math.floor((cur - 1) / 2);

        while (
            cur > 0
            && this.heap[cur] > this.heap[par]
        ) {
            [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];
            cur = par;
            par = Math.floor((cur - 1) / 2);
        }
    }

    pop() {
        if (this.heap.length === 0) return 0;
        if (this.heap.length === 1) return this.heap.pop();

        const returnValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        let [cur, left, right] = [0, 1, 2];

        while (
            this.heap[cur] < this.heap[left]
            || this.heap[cur] < this.heap[right]
        ) {
            if (this.heap[left] < this.heap[right]) {
                [this.heap[right], this.heap[cur]] = [this.heap[cur], this.heap[right]];
                cur = right;
            }
            else {
                // left > right 일 때, right가 없을 때는 left <-> cur 교환해야 함
                [this.heap[left], this.heap[cur]] = [this.heap[cur], this.heap[left]];
                cur = left;
            }

            left = cur * 2 + 1;
            right = cur * 2 + 2;
        }

        return returnValue;
    }
}

const answer = [];

let heap = new MaxHeap();

for (const item of input) {
    if (item === 0) {
        const printValue = heap.pop();
        answer.push(printValue);
    }
    else {
        heap.push(item);
    }
}

console.log(answer.join('\n'));