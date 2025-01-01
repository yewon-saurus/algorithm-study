function solution(my_string, overwrite_string, s) {
    let my_str_arr = [...my_string];
    let owst_queue = new Queue(overwrite_string);
    
    for (let i = s; i < s + overwrite_string.length; i++) {
        my_str_arr[i] = owst_queue.dequeue();
    }
    
    return my_str_arr.join('');
}

class Queue {
    constructor(arr) {
        this.queue = [...arr];
        this.head = 0;
        this.rear = arr.length - 1;
    }
    
    dequeue() {
        let return_value = this.queue[this.head];
        this.head += 1;
        return return_value;
    }
}