function solution(arr, queries) {
    queries.forEach((ele) => {
        const [s, e] = ele;
        for (let i = s; i <= e; i++) {
            arr[i] += 1;
        }
    })
    
    return arr;
}