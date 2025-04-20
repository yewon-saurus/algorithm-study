function solution(arr) {
    let stack = [];
    
    arr.forEach(ele => {
        if (stack[stack.length - 1] !== ele) stack.push(ele);
    });
    
    return stack;
}