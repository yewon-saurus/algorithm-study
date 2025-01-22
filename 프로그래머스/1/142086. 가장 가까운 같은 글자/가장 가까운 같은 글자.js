function solution(s) {
    const map = new Map();
    const answer = [];
    
    [...s].forEach((ele, idx) => {
        if (map.get(ele) !== undefined) {
            answer.push(idx - map.get(ele));
            map.set(ele, idx);
        }
        else {
            answer.push(-1);
            map.set(ele, idx);
        }
    });
    
    return answer;
}