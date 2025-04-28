function solution(citations) {
    let answer = 0;
    let sortedByQuo = [...citations].sort((a, b) => - a + b);
    
    for (let i = 0; i < sortedByQuo.length; i++) {
        if (sortedByQuo[i] > i) answer++;
    }
    
    return answer;
}