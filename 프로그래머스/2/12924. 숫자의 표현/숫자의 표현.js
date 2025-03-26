function solution(n) {
    var sumArr = [0];
    var answer = 0;
    var [l, r] = [0, 1];
    
    for (var i = 1; i <= n; i++) {
        sumArr.push(sumArr[sumArr.length - 1] + i);
    }
    
    while (l < r && l <= n && r <= n) {
        if (sumArr[r] - sumArr[l] > n) l++;
        else if (sumArr[r] - sumArr[l] < n) r++;
        else {
            answer++;
            l++;
            r++;
        }
    }
    
    return answer;
}