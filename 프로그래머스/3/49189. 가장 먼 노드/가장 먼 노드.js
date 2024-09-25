function solution(n, edge) {
    let graph = {};
    
    for (const [s, e] of edge) {
        if (!graph[s]) graph[s] = new Set([e]);
        if (!graph[e]) graph[e] = new Set([s]);
        graph[s].add(e);
        graph[e].add(s);
    }
    for (const item in graph) {
        graph[item] = [...graph[item]]
    }
    
    let distance = new Array(n + 1).fill(0);
    distance[1] = 1;
    
    let queue = new Queue();
    queue.enqueue(1);
    while (!queue.isEmpty()) {
        const cur = queue.dequeue();
        for (const breadth of graph[cur]) {
            if (distance[breadth] === 0) {
                queue.enqueue(breadth);
                distance[breadth] = distance[cur] + 1;
            }
        }
    }
    
    const max = Math.max(...distance);
    return distance.filter((item) => item === max).length;
}

class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    
    isEmpty() {
        return this.front === this.rear;
    }
    
    enqueue(value) {
        this.queue[this.rear++] = value;
    }
    
    dequeue() {
        return this.queue[this.front++];
    }
}