function solution(n, k) {
    return Array.from(new Array(n), (_, idx) => idx + 1).filter((ele) => ele % k === 0);
}