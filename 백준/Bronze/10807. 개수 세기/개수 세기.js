const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [N, arr, target] = [input[0], input[1].split(" ").map(Number), input[2]];

function solution(N, arr, target) {
    return arr.filter(ele => ele == target).length;
}

console.log(solution(N, arr, target));