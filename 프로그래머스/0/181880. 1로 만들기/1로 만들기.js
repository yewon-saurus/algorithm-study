function solution(num_list) {
    var answer = 0;
    
    for (let num of num_list) {
        while (num > 1) {
            if (num % 2 === 0) {
                num /= 2;
                answer += 1;
            }
            else {
                num -= 1;
                num /= 2;
                answer += 1;
            }
        }
    }
    
    return answer;
}