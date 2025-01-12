function solution(my_string, alp) {
    var answer = [];
    
    [...my_string].forEach((ele) => {
        if (ele === alp) answer.push(alp.toUpperCase());
        else answer.push(ele);
    })
    
    return answer.join('');
}