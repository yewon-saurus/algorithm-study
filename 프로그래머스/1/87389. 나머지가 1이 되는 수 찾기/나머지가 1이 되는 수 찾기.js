function solution(n) {
    return Array.from(new Array(n), (ele, idx) => idx + 1).filter(ele => n % ele === 1)[0];
}