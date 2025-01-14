function solution(n, arr=[]) {
    // 재귀 풀이
    arr.push(n);
    if (n === 1) return arr;
    if (n % 2 === 0) return solution(n / 2, arr);
    else return solution(3 * n + 1, arr);
}