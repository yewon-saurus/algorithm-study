function solution(my_string, queries) {
    let answer = [...my_string];
    
    for (const [start, end] of queries) {
        const stack = [];
        
        for (let i = start; i <= end; i++) {
            stack.push(answer[i]);
        }
        
        for (let i = start; i <= end; i++) {
            answer[i] = stack.pop();
        }
    }
    
    return answer.join('');
}