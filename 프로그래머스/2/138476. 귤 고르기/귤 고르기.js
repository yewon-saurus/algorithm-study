function solution(k, tangerine) {
    let check = new Map();
    let sortedByCount;
    let answer = 0;
    
    for (const item of tangerine) {
        check.set(item, check.get(item) + 1 || 1);
    }
    
    sortedByCount = [...check].sort((a, b) => a[1] - b[1]);
    
    while (k > 0) {
        const [id, count] = sortedByCount.pop();
        k -= count;
        answer += 1;
    }
    
    return answer;
}