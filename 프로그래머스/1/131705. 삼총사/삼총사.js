function solution(number) {
    var answer = 0;
    
    for (let i = 0; i < number.length - 2; i++) {
        for (let j = i; j < number.length - 1; j++) {
            for (let k = j; k < number.length; k++) {
                if (i === j || j === k || i === k) continue;
                if (number[i] + number[j] + number[k] === 0) {
                    answer += 1;
                }
            }
        }
    }
    
    return answer;
}