function solution(s1, s2) {
    var answer = 0;
    
    for (item of s1) {
        if (s2.filter(jtem => jtem == item).length >= 1) answer += 1;
    }
    
    return answer;
}