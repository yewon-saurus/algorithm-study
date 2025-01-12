function solution(arr, idx) {
    let answer = [];
    
    arr.forEach((ele, i) => {
        if (ele === 1 && i >= idx) answer.push(i);
    });
    
    return answer.length > 0 ? answer[0] : -1;
}