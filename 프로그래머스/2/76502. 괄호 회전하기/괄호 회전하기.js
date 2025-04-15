const match = {
    ']': '[',
    '}': '{',
    ')': '(',
}

function solution(s) {
    let answer = 0;
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        const sCopy = new Queue(s); // Queue 구현
        while (sCopy.size() > 0) {
            const target = sCopy.dequeue();
            
            if (match[target] && match[target] === stack[stack.length - 1]) stack.pop();
            else stack.push(target);
        }
        
        if (stack.length === 0) answer += 1;
        
        stack = []; // stack 초기화
        s = [...s.slice(1), s[0]].join(''); // 회전
    }
    
    return answer;
}

class Queue {
    constructor(str) {
        this.queue = [...str];
        this.head = 0;
        this.tail = str.length - 1;
    }
    
    enqueue(value) {
        this.queue.push(value);
        this.tail += 1;
    }
    
    dequeue() {
        const returnValue = this.queue[this.head];
        this.head += 1;
        
        return returnValue;
    }
    
    size() {
        return this.tail - this.head + 1;
    }
}