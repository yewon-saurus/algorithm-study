function solution(arr, queries) {
    for (const [s, e, k] of queries) {
        arr.slice(s, e + 1).forEach((_, idx) => {
            if ((idx + s) % k === 0) arr[idx + s] += 1;
        });
    }
    
    return arr;
}