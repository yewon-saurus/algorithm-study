const HIT_TIME = 1;
const MISS_TIME = 5;

function solution(cacheSize, cities) {
    let cache = new Queue();
    let total = 0;
    
    for (let item of cities) {
        item = item.toUpperCase();
        
        if (!cache.find(item)) {
            if (cache.size() >= cacheSize) {
                cache.dequeue();
            }
            cache.enqueue(item);
            total += MISS_TIME;
        }
        else {
            cache.update(item); // item을 다시 가장 나중 순위로 미루는 조치 필요
            total += HIT_TIME;
        }
        
        // console.log(item, total, cache.size(), cache.queue);
    }
    
    return total;
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
        const returnValue = this.queue[0];
        this.head++;
        return returnValue;
    }
    
    size() {
        return this.tail - this.head;
    }
    
    find(value) {
        return [...this.queue.slice(this.head, this.tail + 1)].includes(value);
    }
    
    update(value) {
        const targetIndex = this.queue.lastIndexOf(value);
        this.queue.splice(targetIndex, 1); // targetIndex 요소 제거
        this.queue.push(value);  
    }
}