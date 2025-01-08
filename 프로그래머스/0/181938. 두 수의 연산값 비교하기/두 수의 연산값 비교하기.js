function solution(a, b) {
    return calc(a, b);
}

function calc(a, b) {
    let result = `${a}${b}`;
    return Math.max(result, 2 * a * b);
}