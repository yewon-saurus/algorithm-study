function solution(s){
    let answer = true;
    let stack = [];
    
    for (let i of s) {
        if (i == "(") stack.push(i);
        else if (i == ")") {
            if (stack.length > 0) stack.pop();
            else answer = false;
        }
    }
    if (stack.length > 0) answer = false;

    return answer;
}