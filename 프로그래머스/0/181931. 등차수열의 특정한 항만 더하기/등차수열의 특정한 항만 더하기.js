function solution(a, d, included) {
    let answer = 0;
    
    let seq = Array.from(new Array(included.length), (_, idx) => a + d * idx);
    included.forEach((ele, idx) => {
        if (ele) answer += seq[idx];
    });
    
    return answer;
}