const delta = [[1, 0], [0, 1], [-1, 0], [0, -1]];

function solution(maps) {
    let queue = new Queue();
    queue.enqueue([0, 0, 1]); // x, y, distance
    
    while (!queue.isEmpty()) {
        const [x, y, distance] = queue.dequeue();
        
        for (const [dx, dy] of delta) {
            if (
                x + dx >= 0 && x + dx < maps.length &&
                y + dy >= 0 && y + dy < maps[0].length &&
                maps[x + dx][y + dy] === 1
            ) {
                maps[x + dx][y + dy] = distance + 1;
                queue.enqueue([x + dx, y + dy, maps[x + dx][y + dy]]);
            }
        }
    }
    
    return maps[maps.length - 1][maps[0].length - 1] <= 1 ? -1 : maps[maps.length - 1][maps[0].length - 1];
}

class Queue {
    constructor() {
        this.queue = [];
        this.head = 0;
        this.tail = 0;
    }
    
    enqueue(value) {
        this.queue.push(value);
        this.tail++;
    }
    
    dequeue() {
        const returnValue = this.queue[this.head];
        this.head++;
        return returnValue;
    }
    
    isEmpty() {
        return this.tail - this.head === 0;
    }
}