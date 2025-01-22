function solution(s) {
    const map = new Map();
    const answer = [];
    
    [null, ...s].forEach((ele, idx) => {
        if (map.get(ele)) {
            answer.push(idx - map.get(ele));
            map.set(ele, idx);
        }
        else {
            answer.push(-1);
            map.set(ele, idx);
        }
    });
    
    console.log(map);
    return answer.slice(1);
}