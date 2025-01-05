function solution(n) {
    return n % 2 == 0
        ? Array.from(new Array(n), (_, idx) => idx + 1).filter(item => item % 2 == 0).reduce((acc, cur) => acc + cur ** 2, 0)
        : Array.from(new Array(n), (_, idx) => idx + 1).filter(item => item % 2 == 1).reduce((acc, cur) => acc + cur, 0);
}