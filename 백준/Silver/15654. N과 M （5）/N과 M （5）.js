const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number).sort((a, b) => a - b);

function solution(arr, n) {
    let result = [];

    if (n === 1) return arr.map(v => [v]);
    arr.forEach((fixed, fixedIndex, origin) => {
        const rest = [...origin.slice(0, fixedIndex), ...origin.slice(fixedIndex + 1)];
        const sub = solution(rest, n - 1);
        const attached = sub.map(s => [fixed, ...s]);
        result.push(...attached);
    });

    return result;
}

console.log(solution(nums, M).map(item => item.join(" ")).join("\n"));