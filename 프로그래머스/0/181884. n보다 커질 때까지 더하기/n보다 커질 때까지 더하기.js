function solution(numbers, n) {
    let answer = 0;
    let i = 0;
    
    while (answer <= n) {
        answer += numbers[i];
        i += 1;
    }
        
    return answer;
}