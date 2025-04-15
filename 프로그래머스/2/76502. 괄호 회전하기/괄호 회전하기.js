function solution(s) {
    let answer = 0;
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        const sCopy = [...s];
        while (sCopy.length > 0) {
            const target = sCopy.shift();
            
            if (target === ']' && stack[stack.length - 1] === '[') {
                stack.pop();
            }
            else if (target === '}' && stack[stack.length - 1] === '{') {
                stack.pop();
            }
            else if (target === ')' && stack[stack.length - 1] === '(') {
                stack.pop();
            }
            else stack.push(target);
        }
        
        if (stack.length === 0) answer += 1;
        
        stack = []; // stack 초기화
        s = [...s.slice(1), s[0]].join(''); // 회전
    }
    
    return answer;
}