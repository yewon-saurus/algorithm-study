function solution(arr, query) {
    var answer = [...arr];
    
    query.forEach((ele, idx) => {
        if (idx % 2 === 0) answer.splice(ele + 1, answer.length);
        else answer.splice(0, ele);
    });
    
    return answer;
}