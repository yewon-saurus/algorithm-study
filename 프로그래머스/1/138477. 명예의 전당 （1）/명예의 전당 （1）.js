function solution(k, score) {
    // min heap
    let heap = new MinHeap();
    let answer = [];
    
    score.forEach((ele) => {
        if (heap.heap.length < k) {
            heap.push(ele);
        }
        else {
            if (heap.peek() <= ele) {
                heap.pop();
                heap.push(ele);
            }
        }
        answer.push(heap.peek());
    });
    
    return answer;
}

class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    push(value) {
        let cur, par;
        
        this.heap.push(value);
        
        cur = this.heap.length - 1;
        par = Math.floor((cur - 1) / 2);
        
        while (this.heap[par] > this.heap[cur]) {
            [this.heap[par], this.heap[cur]] = [this.heap[cur], this.heap[par]];
            cur = par;
            par = Math.floor((cur - 1) / 2);
        }
    }
    
    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        let [cur, left, right] = [0, 1, 2];
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        
        while (
            this.heap[cur] > this.heap[left] ||
            this.heap[cur] > this.heap[right]
        ) {
            if (this.heap[left] > this.heap[right]) {
                [this.heap[cur], this.heap[right]] = [this.heap[right], this.heap[cur]];
                cur = right;
            }
            else {
                [this.heap[cur], this.heap[left]] = [this.heap[left], this.heap[cur]];
                cur = left;
            }
            left = cur * 2 + 1;
            right = cur * 2 + 2;
        }
        
        return min;
    }
    
    peek() {
        return this.heap[0];
    }
}