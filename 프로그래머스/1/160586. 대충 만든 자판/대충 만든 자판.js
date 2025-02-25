function solution(keymap, targets) {
    let answer = new Array(targets.length).fill(0);
    let minmap = new Map();
    
    for (const key of keymap) {
        [...key].forEach((ele, idx) => {
            minmap.set(ele, Math.min(minmap.get(ele), idx + 1) || idx + 1);
        });
    }
    
    targets.forEach((target, idx) => {
        for (const ele of target) {
            if (!minmap.get(ele)) {
                answer[idx] = -1;
                break;
            }
            answer[idx] += minmap.get(ele);
        }
    });
    
    return answer;
}