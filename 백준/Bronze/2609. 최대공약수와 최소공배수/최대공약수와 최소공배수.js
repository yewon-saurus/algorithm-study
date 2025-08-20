const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution([A, B]) {
    return [gcd(A, B), lcm(A, B)].join("\n");
}

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function lcm(a, b) {
    return a * b / gcd(a, b);
}

console.log(solution(input));