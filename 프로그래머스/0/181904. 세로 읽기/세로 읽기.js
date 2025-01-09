function solution(my_string, m, c) {
    let answer = [];
    let my_arr = [...my_string];
    
    [...my_string].forEach((ele, idx) => {
        if ((idx + 1) % m === 0) answer.push(my_arr.splice(0, m)[c - 1]);
    });
    
    return answer.join('');
}