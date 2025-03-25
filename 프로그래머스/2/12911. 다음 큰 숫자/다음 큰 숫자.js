function solution(n) {
    let count1 = [...n.toString(2)].filter(v => v == 1).length;
    let target = n + 1;
    let targetCount1 = 0;
    
    while (count1 !== targetCount1) {
        targetCount1 = [...target.toString(2)].filter(v => v == 1).length;
        target++;
    }
    
    return --target;
}