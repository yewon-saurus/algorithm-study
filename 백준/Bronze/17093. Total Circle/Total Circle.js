const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [NM, ...points] = input;
const [N, M] = NM.split(" ").map(Number);

function solution(N, M, points) {
    let p = [], o = [];
    let max = 0;

    for (let i = 0; i < M; i++) {
        const [x, y] = points.pop().split(' ').map(Number);
        o.push([x, y]);
    }
    for (let i = 0; i < N; i++) {
        const [x, y] = points.pop().split(' ').map(Number);
        p.push([x, y]);
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            max = Math.max((p[i][0] - o[j][0]) ** 2 + (p[i][1] - o[j][1]) ** 2, max);
        }
    }
    
    return max;
}

console.log(solution(N, M, points));