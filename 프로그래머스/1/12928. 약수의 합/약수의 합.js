function solution(n) {
    return Array.from(new Array(n), (_, idx) => idx + 1).filter(f => n % f === 0).reduce((acc, cur) => acc + cur, 0);
}