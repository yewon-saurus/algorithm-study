function solution(s) {
    let stack = [];
    
    for (const i of s) {
        if (stack[stack.length - 1] === i) stack.pop();
        else stack.push(i);
    }
    
    return stack.length > 0 ? 0 : 1;
}