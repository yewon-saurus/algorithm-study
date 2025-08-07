const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let input = fs.readFileSync(filePath).toString().trim().split(" ");

input = [...input].map(Number);

function solution([A, B, C]) {
    let answer = [];
    answer.push((A + B) % C);
    answer.push((((A % C) + (B % C)) % C));
    answer.push((A * B) % C);
    answer.push(((A % C) * (B % C)) % C);
    return answer.join('\n');
}

console.log(solution(input));