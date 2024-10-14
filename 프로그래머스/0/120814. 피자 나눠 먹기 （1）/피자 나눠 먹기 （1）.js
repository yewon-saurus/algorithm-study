function solution(n) {
    var answer = 1;
    
    while (n > 7) {
        answer += 1;
        n -= 7;
    }
    
    return answer;
}