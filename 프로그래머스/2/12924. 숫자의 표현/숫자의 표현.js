function solution(n) {
    let sumArr = [0];
    let answer = 0;
    let [l, r] = [0, 1];
    
    for (let i = 1; i <= n; i++) {
        sumArr.push(sumArr[sumArr.length - 1] + i);
    }
    
    while (l <= n && r <= n) {
        const sub = sumArr[r] - sumArr[l]; // 중복 연산 방지
        
        if (sub > n) l++;
        else if (sub < n) r++;
        else {
            answer++;
            l++;
            r++;
        }
    }
    
    return answer;
}