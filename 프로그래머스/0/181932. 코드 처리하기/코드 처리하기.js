function solution(code) {
    let answer = [];
    let mode = 0;
    
    for (let i = 0; i < code.length; i++) {
        if (code[i] == 1) {
            mode = mode === 1 ? 0 : 1;
            continue;
        }
        
        if (mode === 0) {
            if (code[i] != 1) {
                if (i % 2 === 0) {
                    answer.push(code[i]);
                }
            }
            else mode = 1;
        }
        else if (mode === 1) {
            if (code[i] != 1) {
                if (i % 2 === 1) {
                    answer.push(code[i]);
                }
            }
            else mode = 0;
        }
    }
    
    return answer.length > 0 ? answer.join('') : 'EMPTY';
}