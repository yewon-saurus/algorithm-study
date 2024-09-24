function solution(n, times) {
    let left = 1; // 최소 1분부터
    let right = Math.max(...times) * n; // 최대 (제일 느린 심사관이 모든 심사를 처리하는 경우)
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const sum = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0); // 심사에 걸리는 평균 시간
        
        // 입국자는 n명이므로, 그 이상은 처리할 필요가 없다
        if (sum < n) left = mid + 1;
        else right = mid - 1;
    }
    
    return left;
}