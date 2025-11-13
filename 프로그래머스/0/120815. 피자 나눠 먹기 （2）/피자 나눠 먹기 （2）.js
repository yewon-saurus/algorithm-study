function solution(n) {
    let answer = 1;
    
    while (1) {
        if (answer * 6 % n === 0) {
            return answer;
        }
        answer += 1;
    }
}