function solution(arr) {
    var answer = [];
    
    arr.forEach((ele, idx) => {
        answer.push([ele, idx]);
    });
    
    answer = answer.filter(ele => ele[0] == 2);
    if (answer.length === 0) return [-1];
    
    return arr.slice(answer[0][1], answer[answer.length - 1][1] + 1);
}