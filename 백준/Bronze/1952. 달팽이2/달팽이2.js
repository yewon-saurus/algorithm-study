const fs = require('fs');
const filePath = fs.existsSync('./test.txt') ? './test.txt' : '/dev/stdin';
let [M, N] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let answer = 0;
let table = Array.from({ length: M }, (_) => new Array(N).fill(0));
let [y, x] = [0, 0];
table[y][x] = 1;

const DIR = [[0, 1], [1, 0], [0, -1], [-1, 0]];

while (true) {
    const [dy, dx] = DIR[answer % 4];
    let [ny, nx] = [y + dy, x + dx];
    
    if (
        ny < 0 || ny >= M ||
        nx < 0 || nx >= N ||
        table[ny][nx] !== 0
    ) {
        answer += 1;

        const [tdy, tdx] = DIR[answer % 4];
        const [ty, tx] = [y + tdy, x + tdx];

        if (
            ty < 0 || ty >= M ||
            tx < 0 || tx >= N ||
            table[ty][tx] !== 0
        ) {
            answer -= 1;
            break;
        }
    }
    else {
        y = ny;
        x = nx;
        table[y][x] = 1;
    }
}

console.log(answer);