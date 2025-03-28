function solution(arr) {
    let answer = 2;
    
    while (true) {
        answer++;
        if (arr.filter(ele => answer % ele === 0).length === arr.length) break;
    }
    
    return answer;
}