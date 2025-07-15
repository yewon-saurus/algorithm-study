function solution(k, m, score) {
    let sorted = score.sort((a, b) => a - b);
    let answer = [];
    
    while (sorted.length >= m) {
        let box = [];
        for (let i = 0; i < m; i++) {
            let cur = sorted.pop();
            box.push(cur);
        }
        answer.push(box[box.length - 1] * box.length);
    }
    
    return answer.reduce((acc, cur) => acc + cur, 0);
}