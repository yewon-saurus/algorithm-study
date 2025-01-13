function solution(arr, queries) {
    const answer = [];
    
    for (const [s, e, k] of queries) {
        answer.push(arr.slice(s, e + 1).filter(ele => ele > k).sort((a, b) => a - b)[0]);
    }
    
    answer.forEach((ele, idx) => {
        if (!ele) answer[idx] = -1;
    })
    
    return answer;
}