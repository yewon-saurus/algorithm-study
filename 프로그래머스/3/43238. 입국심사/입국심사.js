function solution(n, times) {
    let [left, right] = [1, Math.max(...times) * n];
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const sum = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);
        
        if (sum < n) left = mid + 1;
        else right = mid - 1;
    }
    
    return left;
}