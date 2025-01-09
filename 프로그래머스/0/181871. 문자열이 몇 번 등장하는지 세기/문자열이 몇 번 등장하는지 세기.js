function solution(myString, pat) {
    const answer = [];
    
    for (let i = 0; i < myString.length - pat.length + 1; i++) {
        if (myString.slice(i, i + pat.length) == pat) answer.push(i);
    }
    
    return answer.length;
}